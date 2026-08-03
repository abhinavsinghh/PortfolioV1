export default function ProjectCard({ project }) {
    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
  
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
  
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
  
          <div className="flex gap-4 text-sm font-medium">
            {/* <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Site →
            </a> */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:underline"
            >
              Code →
            </a>
          </div>
        </div>
      </div>
    )
  }