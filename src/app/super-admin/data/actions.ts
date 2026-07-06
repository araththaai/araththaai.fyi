"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { encrypt } from "@/lib/crypto";

const prisma = new PrismaClient();

export async function updateRecord(table: string, id: string, data: any) {
  try {
    const model = (prisma as any)[table];
    if (!model) {
      throw new Error(`Table ${table} not found in Prisma Client`);
    }

    // Process fields before saving (like encrypting the password if it was changed)
    const cleanedData = { ...data };
    
    // We shouldn't update the ID
    delete cleanedData.id;

    // Handle password encryption if the password field is present
    if (cleanedData.password) {
      // If the password starts with our IV delimiter or bcrypt hash, maybe it's not a plain text edit,
      // but if the user edited it, we just re-encrypt it to be safe.
      // Wait, we should only encrypt if it's not already encrypted.
      if (!cleanedData.password.includes(':') && !cleanedData.password.startsWith('$2b$')) {
         cleanedData.password = encrypt(cleanedData.password);
      }
    }

    // Convert string ISO dates back to Date objects
    for (const key in cleanedData) {
      if (typeof cleanedData[key] === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(cleanedData[key])) {
        cleanedData[key] = new Date(cleanedData[key]);
      }
    }

    await model.update({
      where: { id },
      data: cleanedData
    });

    revalidatePath("/super-admin/data");
    return { success: true };
  } catch (error: any) {
    console.error("Error updating record:", error);
    return { success: false, error: error.message || "Failed to update record" };
  }
}
