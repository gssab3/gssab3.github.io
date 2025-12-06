import React from 'react'
import { projects } from '../data/experiences'
import '../styles/Projects.css'

const Projects: React.FC = () => {
  return (
    <div className="page projects-page">
      <h1>Projects</h1>
      <p>I have worked on several projects for educational and personal purposes. Below is a detailed list of the projects I am most proud of, due to their maintainability, effectiveness, contextual importance, or software design.</p>
      <div className="thesis-projects">
        <h2>Thesis Projects</h2>
        {projects.map((project) => (
          project.type === "ThesisProject" && (
            <div key={project.name} className="project-item">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <p><strong>Duration:</strong> {project.dateStarted} - {project.dateEnded}</p>
              <p><a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a></p>
            </div>
          )
        ))}
      </div>
      <div className="course-projects">
        <h2>Course Projects</h2>
        {projects.map((project) => (
          project.type === "CourseProject" && (
            <div key={project.name} className="project-item">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <p><strong>Duration:</strong> {project.dateStarted} - {project.dateEnded}</p>
              <p><a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a></p>
            </div>
          )
        ))}
      </div>
      <div className="personal-projects">
        <h2>Personal Projects</h2>
        {projects.map((project) => (
          project.type === "PersonalProject" && (
            <div key={project.name} className="project-item">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <p><strong>Duration:</strong> {project.dateStarted} - {project.dateEnded}</p>
              <p><a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a></p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default Projects
