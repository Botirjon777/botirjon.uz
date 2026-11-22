import type React from "react";
import type { Metadata } from "next";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { getDictionary } from "@/i18n/get-dictionary";
import { I18nProvider } from "@/i18n/provider";
import { fontClasses } from "@/lib/fonts";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://botirjon.uz"),
};

// The privacy policy stays at /privacy in English: a Google app's consent
// screen links to this exact URL.
export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <body className={`${fontClasses("en")} font-sans antialiased bg-ink text-paper`}>
        <I18nProvider locale="en" dict={getDictionary("en")}>
          <NavbarComponent />
          <div className="pt-16">{children}</div>
          <FooterComponent />
        </I18nProvider>
      </body>
    </html>
  );
}
