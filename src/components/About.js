function About() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Tailwind CSS',
    'Git',
    'GitHub',
    'REST APIs',
    'Responsive Design',
  ];

  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
        <div className="w-16 h-1 bg-orange-500 mb-8"></div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <p className="text-gray-600 text-lg leading-relaxed">
              Hi! I'm Parisha Rajthala, an aspiring Frontend Developer and BIM
              student at Nagarjuna College of IT. I'm passionate about building
              clean, responsive web interfaces and constantly learning new tools
              and frameworks like React.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              I enjoy turning ideas into real web experiences and I'm eager to
              apply my skills to real-world projects.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
