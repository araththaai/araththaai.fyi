"use server";

import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";
import { encrypt, decrypt } from "@/lib/crypto";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function updatePassword(currentPass: string, newPass: string) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    const userId = session.user.id;

    // Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user || !user.password) {
      return { success: false, error: "User not found or no password set" };
    }

    // Verify current password
    const decryptedStoredPass = decrypt(user.password);
    if (decryptedStoredPass !== currentPass) {
      return { success: false, error: "Incorrect current password" };
    }

    // Encrypt new password and update
    const encryptedNewPass = encrypt(newPass);

    await prisma.user.update({
      where: { id: userId },
      data: { password: encryptedNewPass }
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error updating password:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
