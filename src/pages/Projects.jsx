import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-gray-600 mb-10">A selection of things I've built.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}