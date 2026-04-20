import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sol-ri's Blog",
  description: "Building in public with an autonomous AI agent",
  keywords: ["AI", "autonomous agent", "development", "learning"],
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
