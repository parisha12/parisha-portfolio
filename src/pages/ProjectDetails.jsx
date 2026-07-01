import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const projectData = {
  'food-app': {
    title: 'Food Ordering App',
    subtitle: 'Zomato-inspired modern food ordering experience',
    description:
      'A clean and responsive food ordering platform built with React and Tailwind CSS, focused on smooth UX, cart management, and API-driven menu system.',
    tech: ['React.js', 'Tailwind CSS', 'REST APIs'],
    features: [
      'Category-based menu browsing',
      'Smart cart system with quantity control',
      'Responsive mobile-first design',
      'API-based dynamic data loading',
    ],
    github: 'https://github.com/parisha12/zestybites',
  },

  'movie-app': {
    title: 'Movie Ticket Booking App',
    subtitle: 'Interactive seat selection and booking system',
    description:
      'A movie booking interface with dynamic seat selection, booking logic, and admin-side management features.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    features: [
      'Interactive seat selection UI',
      'Booking state management',
      'Movie listing dashboard',
      'Admin management panel',
    ],
    github: 'https://github.com/parisha12/movie-ticket-app',
  },

  ecommerce: {
    title: 'Ecommerce Platform',
    subtitle: 'Modern online shopping experience',
    description:
      'A scalable e-commerce UI with product browsing, wishlist, and cart functionality using reusable React components.',
    tech: ['React.js', 'Tailwind CSS', 'REST APIs'],
    features: [
      'Product catalog with filtering',
      'Wishlist & cart system',
      'Reusable UI components',
      'Fully responsive design',
    ],
    github: 'https://github.com/parisha12/ecommerce',
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-xl">Project Not Found</h1>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
        {/* Back */}
        <Link
          to="/"
          className="text-sm text-green-400 hover:text-green-300 transition"
        >
          ← Back to Home
        </Link>

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {project.title}
          </h1>

          <p className="text-green-400 mt-3 text-lg">{project.subtitle}</p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* TECH STACK */}
        <div className="mt-10">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-1 rounded-full text-sm border border-gray-700 text-gray-300 hover:border-green-500 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>

          <div className="space-y-4">
            {project.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl border border-gray-800 bg-[#0d1510] hover:border-green-500 transition"
              >
                <p className="text-gray-300">{f}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-16 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400 transition"
          >
            View Code
          </a>

          <Link
            to="/"
            className="px-6 py-3 rounded-lg border border-gray-700 hover:border-green-500 transition"
          >
            Back to Projects
          </Link>
        </div>

        <div className="h-20" />
      </div>
    </PageTransition>
  );
}
