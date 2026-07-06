import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
// Note: If these env vars are missing, the SDK will look for CLOUDINARY_URL
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads a file buffer to Cloudinary
 * @param buffer - The file buffer to upload
 * @param folder - The folder in Cloudinary to upload to
 * @param resourceType - 'auto', 'image', 'video', 'raw'
 * @returns A promise resolving to the Cloudinary Upload API response
 */
export async function uploadToCloudinary(
  buffer: Buffer,
  folder: string = 'araththaai_uploads',
  resourceType: 'auto' | 'image' | 'video' | 'raw' = 'auto'
): Promise<any> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    // Write the buffer to the stream and end it
    uploadStream.end(buffer);
  });
}

export default cloudinary;
