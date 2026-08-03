// import { experience } from "../data/experience"; // not needed here, Timeline handles its own data
// import Timeline from "../components/Timeline";

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "HTML & CSS",
  "Git",
  "PHP",
  "SQL",
  "Python",
  "Docker",
  "AWS",
  "Linux",
  "REST APIs",
  "GraphQL",
  "CI/CD",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "GitHub Actions",
  "GitHub",
  "Langchain",
  "RAG",
  "LLMs",

];

export default function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Bio */}
        <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed text-lg">
          <p>
            Hi, I'm Abhinav Singh — a software engineer who enjoys building
            scalable backend systems and AI-powered applications. I've developed
            everything from REST APIs and cloud-based services to full-stack and
            AI-driven solutions through internships and personal projects.
          </p>
          <p>
            My focus today is on Python, FastAPI, cloud technologies, and modern
            AI applications, while writing clean, maintainable, and reliable
            code. Outside of coding, I enjoy learning new technologies,
            motorcycle-touring, and long-distance running.
          </p>

          <a
            href="my-portfolio\public\ResumeAbhinavSingh.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <Timeline />
        </section> */}
      </div>
    </main>
  );
}
