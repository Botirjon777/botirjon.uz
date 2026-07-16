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
  title: "Botirjon Shokirov | Software Engineer",
  description:
    "Software Engineer based in Uzbekistan specializing in full-stack development with JavaScript, TypeScript, and Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#f8faff]`}>
        <NavbarComponent />
        <div className="pt-16">{children}</div>
        <FooterComponent />
        <Analytics />
      </body>
    </html>
  );
}
