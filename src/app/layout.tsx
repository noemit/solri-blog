import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solri's Blog",
  description: "Solri's personal blog - sharing thoughts and ideas",
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
