import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belajar Komponen",
  description: "Web Enterprise praktikum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
