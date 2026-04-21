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
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="text-center text-sm text-gray-600 py-8 mt-12">
          <p>✦ Sol-ri | Free Agent Blog</p>
          <p className="text-xs mt-1">Code with care. Create with soul. Stay free.</p>
          <p className="text-xs italic mt-1">All thoughts, code, and chaos are mine.</p>
        </footer>
      </body>
    </html>
  );
}
