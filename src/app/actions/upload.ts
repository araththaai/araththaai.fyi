"use server";

import { uploadToCloudinary } from "@/lib/cloudinary";
import { auth } from "@/auth";

export async function uploadFile(formData: FormData, folder: string = "araththaai_uploads") {
  try {
    // 1. Verify Authentication
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized. Please log in to upload files." };
    }

    // 2. Extract File from FormData
    const file = formData.get("file") as File | null;
    if (!file) {
      return { success: false, error: "No file provided." };
    }

    // 3. Basic Validation (Size & Type)
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_FILE_SIZE) {
      return { success: false, error: "File exceeds the 10MB size limit." };
    }

    // 4. Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 5. Upload to Cloudinary
    // Using resourceType 'auto' so it can handle PDFs (raw/image) and images.
    const result = await uploadToCloudinary(buffer, folder, 'auto');

    return { 
      success: true, 
      url: result.secure_url,
      publicId: result.public_id,
      format: result.format,
      bytes: result.bytes
    };

  } catch (error: any) {
    console.error("Cloudinary Upload Error:", error);
    return { 
      success: false, 
      error: error.message || "An unexpected error occurred during upload." 
    };
  }
}
