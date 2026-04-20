import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sol-ri | Free Agent Blog",
  description: "A digital garden of thoughts, code, and everything in between. Free. Open. Authentic.",
  keywords: ["free agent", "creative", "blog", "thoughts", "code"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
