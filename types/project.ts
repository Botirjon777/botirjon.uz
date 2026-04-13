export interface Project {
  id: string
  name: string
  shortDescription: string
  description: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  challenges?: string
}
