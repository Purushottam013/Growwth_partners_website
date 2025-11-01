import { supabase } from "@/integrations/supabase/client";
import { nanoid } from "nanoid";

/**
 * Compress and convert image to WebP format
 */
export const compressImage = async (
  file: File,
  maxWidth: number = 1200,
  quality: number = 0.85
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    img.onload = () => {
      // Calculate new dimensions
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to compress image"));
          }
        },
        "image/webp",
        quality
      );
    };

    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
};

/**
 * Upload image to Supabase Storage and return public URL
 */
export const uploadToSupabaseStorage = async (
  file: File,
  folder: string = "content-images"
): Promise<string> => {
  try {
    // Compress image first
    const compressedBlob = await compressImage(file);

    // Generate unique filename
    const timestamp = Date.now();
    const randomId = nanoid(10);
    const fileName = `${folder}/${timestamp}_${randomId}.webp`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, compressedBlob, {
        contentType: "image/webp",
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Upload error:", error);
      throw new Error(`Upload failed: ${error.message}`);
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("blog-images").getPublicUrl(fileName);

    return publicUrl;
  } catch (error) {
    console.error("Image upload error:", error);
    throw error;
  }
};

/**
 * Delete image from Supabase Storage
 */
export const deleteFromSupabaseStorage = async (
  imageUrl: string
): Promise<void> => {
  try {
    // Extract filename from URL
    const urlParts = imageUrl.split("/blog-images/");
    if (urlParts.length < 2) {
      throw new Error("Invalid image URL");
    }

    const fileName = urlParts[1];

    // Delete from storage
    const { error } = await supabase.storage
      .from("blog-images")
      .remove([fileName]);

    if (error) {
      console.error("Delete error:", error);
      throw new Error(`Delete failed: ${error.message}`);
    }
  } catch (error) {
    console.error("Image delete error:", error);
    throw error;
  }
};
