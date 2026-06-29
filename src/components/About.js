import { motion } from "framer-motion";

function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js",
    "Tailwind CSS", "Git", "GitHub", "REST APIs", "Responsive Design"
  ];

  return (
    <section id="about" className="py-20 px-6" style={{ background: "#0d1510" }}>
      <div className="max-w-6xl mx-auto">
        <motion.p className="text-sm font-medium mb-2 tracking-widest uppercase" style={{ color: "#4ade80" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Beyond Portfolio
        </motion.p>
        <motion.h2 className="text-5xl font-black text-white mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Hi! I'm Parisha Rajthala, an aspiring Frontend Developer and BIM student at Nagarjuna College of IT.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm passionate about building clean, responsive web interfaces and constantly learning new tools and frameworks like React. I enjoy turning ideas into real web experiences.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-white mb-6">My Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full text-sm font-medium border" style={{ borderColor: "#4ade80", color: "#4ade80", background: "rgba(74, 222, 128, 0.1)" }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;