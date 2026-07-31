import type { Metadata } from "next";
import ContactComponent from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Botirjon Shokirov",
  description: "Get in touch with Botirjon Shokirov.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactComponent />;
}
