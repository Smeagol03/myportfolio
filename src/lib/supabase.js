import { createClient } from "@supabase/supabase-js";

// Ganti dengan URL dan Anon Key dari Supabase project Anda
// Dapatkan dari: https://app.supabase.com/project/_/settings/api
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function untuk upload gambar blog
export async function uploadBlogImage(file, blogId) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${blogId}-${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from("blog-images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  const {
    data: { publicUrl },
  } = supabase.storage.from("blog-images").getPublicUrl(filePath);

  return publicUrl;
}

// Helper function untuk delete gambar
export async function deleteBlogImage(imageUrl) {
  try {
    const urlParts = imageUrl.split("/");
    const fileName = urlParts[urlParts.length - 1];

    await supabase.storage.from("blog-images").remove([fileName]);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}
