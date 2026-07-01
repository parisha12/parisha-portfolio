import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="p-5 bg-gray-900 rounded-xl hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
