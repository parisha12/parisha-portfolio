function Projects() {
  const projects = [
    {
      title: "Food Ordering App",
      description: "A responsive food ordering UI built with React.js and Tailwind CSS. Features menu browsing, cart management and real-time order tracking via REST APIs.",
      tech: ["React.js", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/YOUR-USERNAME/food-ordering-app",
    },
    {
      title: "Movie Ticket Booking App",
      description: "An interactive movie ticket booking system with seat selection interface, dynamic state management and an admin dashboard for managing movies.",
      tech: ["React.js", "JavaScript", "CSS"],
      github: "https://github.com/YOUR-USERNAME/movie-ticket-app",
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with responsive product browsing, wishlist and cart features. Built with reusable React components styled with Tailwind CSS.",
      tech: ["React.js", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/YOUR-USERNAME/ecommerce-platform",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Projects</h2>
        <div className="w-16 h-1 bg-orange-500 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="text-orange-500 font-medium hover:underline text-sm">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;