import type { Metadata } from "next";
import EducationComponent from "@/components/education";

export const metadata: Metadata = {
  title: "Education | Botirjon Shokirov",
  description:
    "Academic background of Botirjon Shokirov, B.Sc. Computer Science.",
  alternates: {
    canonical: "/education",
  },
};

export default function EducationPage() {
  return <EducationComponent />;
}
