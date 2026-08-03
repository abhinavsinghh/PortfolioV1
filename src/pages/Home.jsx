import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="min-h-[80vh] flex flex-col justify-center gap-6">
        <p className="text-blue-600 font-medium">Hi, my name is</p>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
          Abhinav Singh
        </h1>

        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-400">
          Software Engineer | Backend Developer | AI Enthusiast
        </h2>

        <p className="max-w-xl text-gray-600 text-lg leading-relaxed">
          I'm a Python developer building modern web applications and AI-driven
          software experiences. Currently focused on backend engineering, cloud
          technologies, and writing clean, maintainable code.
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
