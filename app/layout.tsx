import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexandre Joliet - Photographies",
  description:
    "Photographe amateur passionné, je présente ici une sélection de photographies réalisées par mes soins. Bon visionnage !",
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
