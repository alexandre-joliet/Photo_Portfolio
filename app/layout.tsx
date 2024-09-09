import type { Metadata } from "next";
import ogImage from "../public/images/opengraph-image.jpg";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexandre Joliet - Photographies",
  description:
    "Photographe amateur passionné, je présente ici une sélection de photographies réalisées par mes soins. Bon visionnage !",
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
