import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";
import { createClient } from "@supabase/supabase-js";

// Fetch dynamic blog routes for the sitemap
const getDynamicRoutes = async () => {
  const supabaseUrl = "https://axneiijxeuuddmkwzuml.supabase.co";
  const supabaseAnonKey = "sb_publishable_i-Ps5ZKOpxidg0FFvTZA8w_B8g--a7M";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { data } = await supabase
      .from("posts")
      .select("slug")
      .eq("status", "published");

    if (data) {
      return data.map((post) => `/blog/${post.slug}`);
    }
    return [];
  } catch (error) {
    console.error("Error fetching dynamic routes for sitemap:", error);
    return [];
  }
};

// https://vite.dev/config/
export default defineConfig(async () => {
  const dynamicRoutes = await getDynamicRoutes();

  return {
    plugins: [
      react(),
      tailwindcss(),
      Sitemap({
        hostname: "https://alpiant.my.id",
        dynamicRoutes: [
          "/blog",
          ...dynamicRoutes
        ],
      }),
    ],
  };
});
