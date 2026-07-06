import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

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
