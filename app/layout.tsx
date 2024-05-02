import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo Porfolio - Alexandre Joliet",
  description: "Alexandre Joliet's Photo Porfolio",
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
