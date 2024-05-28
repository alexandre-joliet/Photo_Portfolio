/** @type {import('next').NextConfig} */
const account = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: `/${account}/**`,
      },
    ],
  },
};

export default nextConfig;
