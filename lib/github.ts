export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  updated_at: string;
  created_at: string;
  fork: boolean;
  archived: boolean;
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch("https://api.github.com/users/Botirjon777/repos?sort=updated&per_page=100", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!res.ok) {
      console.error("Failed to fetch Github repos");
      return [];
    }

    const repos: GithubRepo[] = await res.json();
    
    // Filter out forks and archived repos to only show active ones
    return repos.filter(repo => !repo.fork && !repo.archived);
  } catch (error) {
    console.error("Error fetching Github repos:", error);
    return [];
  }
}

export async function getGithubRepo(name: string): Promise<GithubRepo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/Botirjon777/${name}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export async function getGithubReadme(name: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/Botirjon777/${name}/readme`, {
      headers: { Accept: "application/vnd.github.v3.raw" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch (error) {
    return null;
  }
}
