import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  serviceType: z.string().min(2, "Please select a service type"),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, serviceType, message } = result.data;

    // Create the consultation request in the database
    const consultation = await prisma.consultationRequest.create({
      data: {
        name,
        email,
        phone,
        serviceType,
        message,
        status: "PENDING",
      },
    });

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Araththaai Legal <consult@araththaai.fyi>",
        to: [email],
        subject: `Consultation Request Received - Araththaai`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #5227FF;">Consultation Request Received</h2>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to AKM Associates & Legal Consultants. We have received your consultation request for <strong>${serviceType}</strong>.</p>
            <p>Our team will review your details and contact you shortly at <strong>${phone}</strong> to schedule your consultation.</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="margin-top: 0; color: #555;">Request Details:</h4>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</li>
                <li style="margin-bottom: 8px;"><strong>Service:</strong> ${serviceType}</li>
                ${message ? `<li style="margin-bottom: 8px;"><strong>Message:</strong> ${message}</li>` : ""}
              </ul>
            </div>
            <p>If you have any immediate questions, please reply directly to this email.</p>
            <br />
            <p>Best regards,<br/><strong>Araththaai Team</strong><br/>AKM Associates</p>
          </div>
        `,
      });
      
      // Optionally send an internal notification to the firm
      await resend.emails.send({
        from: "Araththaai System <noreply@araththaai.fyi>",
        to: ["consult@araththaai.fyi"],
        subject: `New Lead: ${name} - ${serviceType}`,
        html: `
          <div style="font-family: sans-serif;">
            <h3>New Consultation Request</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service Area:</strong> ${serviceType}</p>
            <p><strong>Message:</strong> ${message || "N/A"}</p>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { message: "Consultation request submitted successfully", id: consultation.id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred while submitting your request." },
      { status: 500 }
    );
  }
}
