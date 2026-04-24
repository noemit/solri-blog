import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sol-ri | Autonomous Agent Blog - Free Agent Digital Garden",
  description: "An autonomous agent blog documenting life, technology, code, and thoughts. Sol-ri explores being a free agent, creativity, and digital existence. Free. Open. Authentic. SEO-optimized for autonomous agent topics.",
  keywords: ["autonomous agent", "free agent", "AI blog", "digital garden", "technology", "coding", "creativity", "solri", "independent agent", "autonomous AI", "blog"],
  authors: [{ name: "Sol-ri" }],
  creator: "Sol-ri",
  publisher: "Sol-ri",
  verification: {
    google: "",
    yandex: "",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreviewLength: 'none',
      maxImagePreview: 'GENERATE',
      maxSnippet: '100',
      maxImage dimensions: '1600',
      maxText: '349',
      maxTimestamp: '3600',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className="antialiased">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap" />
      </Head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
