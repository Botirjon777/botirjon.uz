import HeroComponent from "@/components/hero";
import { getGithubRepos } from "@/lib/github";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const repos = await getGithubRepos();
  // Get the 3 most recently updated active repositories
  const featuredRepos = repos.slice(0, 3);
  return <HeroComponent featuredRepos={featuredRepos} />;
}
