import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 'food-app',
      title: 'Food Ordering App',
      description:
        'A responsive food ordering UI built with React.js and Tailwind CSS. Features menu browsing, cart management and real-time order tracking via REST APIs.',
      tech: ['React.js', 'Tailwind CSS', 'REST APIs'],
      github: 'https://github.com/parisha12/zestybites',
    },
    {
      id: 'movie-app',
      title: 'Movie Ticket Booking App',
      description:
        'An interactive movie ticket booking system with seat selection interface, dynamic state management and an admin dashboard for managing movies.',
      tech: ['React.js', 'JavaScript', 'CSS'],
      github: 'https://github.com/parisha12/movie-ticket-app',
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce Platform',
      description:
        'A modern e-commerce platform with responsive product browsing, wishlist and cart features. Built with reusable React components styled with Tailwind CSS.',
      tech: ['React.js', 'Tailwind CSS', 'REST APIs'],
      github: 'https://github.com/parisha12/ecommerce',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6"
      style={{ background: '#0a0f0d' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.p
          className="text-sm font-medium mb-2 tracking-widest uppercase"
          style={{ color: '#4ade80' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.p>

        <motion.h2
          className="text-5xl font-black text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <motion.div
                className="p-6 rounded-2xl border border-gray-800 hover:border-green-500 transition cursor-pointer"
                style={{ background: '#0d1510' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(74, 222, 128, 0.1)',
                        color: '#4ade80',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium hover:underline"
                  style={{ color: '#4ade80' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub →
                </a>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
