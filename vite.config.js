import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";
import { createClient } from "@supabase/supabase-js";

// Fetch dynamic blog routes for the sitemap
const getDynamicRoutes = async (env) => {
  const supabaseUrl = env.VITE_SUPABASE_URL;
  const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;
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
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Prioritaskan process.env untuk CI/CD environments (seperti di Netlify)
  const mergedEnv = { ...env, ...process.env };
  const dynamicRoutes = await getDynamicRoutes(mergedEnv);

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
