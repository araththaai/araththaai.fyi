import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { encrypt } from "@/lib/crypto";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists with this email" }, { status: 400 });
    }

    const hashedPassword = encrypt(password);

    let firstName = name;
    let lastName = "";
    if (name && name.includes(" ")) {
      const parts = name.split(" ");
      firstName = parts[0];
      lastName = parts.slice(1).join(" ");
    }

    const user = await prisma.user.create({
      data: {
        email,  
        password: hashedPassword,
        firstName,
        lastName,
        role: "CLIENT", // Default role
      },
    });

    return NextResponse.json(
      { message: "User registered successfully", user: { id: user.id, email: user.email } },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
