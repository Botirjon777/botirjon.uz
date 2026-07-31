import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://botirjon.uz"),
  title: "Botirjon Shokirov | Full Stack Software Engineer",
  description:
    "Botirjon Shokirov is a Software Engineer based in Uzbekistan specializing in full-stack web development with JavaScript, TypeScript, React, Next.js, and Python.",
  keywords: [
    "Botirjon Shokirov",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Uzbekistan",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Botirjon Shokirov" }],
  creator: "Botirjon Shokirov",
  openGraph: {
    title: "Botirjon Shokirov | Full Stack Software Engineer",
    description:
      "Botirjon Shokirov is a Software Engineer based in Uzbekistan specializing in full-stack web development.",
    url: "https://botirjon.uz",
    siteName: "Botirjon Shokirov Portfolio",
    images: [
      {
        url: "https://botirjon.uz/logos/logo.png",
        width: 800,
        height: 600,
        alt: "Botirjon Shokirov Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Botirjon Shokirov | Full Stack Software Engineer",
    description:
      "Botirjon Shokirov is a Software Engineer based in Uzbekistan specializing in full-stack web development.",
    images: ["https://botirjon.uz/logos/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-slate-200`}>
        <NavbarComponent />
        <div className="pt-16">{children}</div>
        <FooterComponent />
        <Analytics />
      </body>
    </html>
  );
}
