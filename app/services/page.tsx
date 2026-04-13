import type { Metadata } from "next";
import ServicesComponent from "@/components/services";

export const metadata: Metadata = {
  title: "Services | Botirjon Shokirov",
  description: "Professional services offered by Botirjon Shokirov including Landing Pages, SPAs, and Full Stack applications.",
};

export default function ServicesPage() {
  return <ServicesComponent />;
}
