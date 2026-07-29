import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "r0lvbyu3",
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tddajwtscnfnlfpklvjx.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZGFqd3RzY25mbmxmcGtsdmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzMDU4NzksImV4cCI6MjA5ODg4MTg3OX0.9_HNyBfxoNOqcpL77hgKotiz0ubqOkgy6vBUCs0_z74",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    useTypeScriptCli: true,
  },
};

export default nextConfig;
