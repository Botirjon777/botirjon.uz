import { MetadataRoute } from "next";
import { getGithubRepos } from "@/lib/github";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://botirjon.uz";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/education",
    "/experience",
    "/projects",
    "/services",
    "/skills",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic project routes
  const repos = await getGithubRepos();
  const projectRoutes = repos.map((repo) => ({
    url: `${baseUrl}/projects/${repo.name}`,
    lastModified: new Date(repo.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
