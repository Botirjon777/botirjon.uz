"use client"

import type React from "react"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/types/project"

interface ProjectDetailComponentProps {
  project: Project
}

const ProjectDetailComponent: React.FC<ProjectDetailComponentProps> = ({ project }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-yellow-400 text-lg">{project.name}</h2>
        <div className="flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

      <div className="mb-3 text-gray-300">{project.description}</div>

      <div className="mb-3">
        <h3 className="text-green-400 mb-1">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-3">
        <h3 className="text-green-400 mb-1">Technologies:</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-800 text-blue-300 rounded-none text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.challenges && (
        <div className="mb-3">
          <h3 className="text-green-400 mb-1">Challenges & Solutions:</h3>
          <div className="text-gray-300 bg-gray-800 p-2 rounded-none">{project.challenges}</div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetailComponent
