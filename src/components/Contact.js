import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6" style={{ background: "#0d1510" }}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.p className="text-sm font-medium mb-2 tracking-widest uppercase" style={{ color: "#4ade80" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Get In Touch
        </motion.p>
        <motion.h2 className="text-5xl font-black text-white mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          Contact Me
        </motion.h2>
        <motion.p className="text-gray-400 text-lg mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          Feel free to reach out - I am open to opportunities and collaborations!
        </motion.p>
        <motion.div className="flex flex-col md:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
          <a href="mailto:rajthalapari@gmail.com" className="px-8 py-4 rounded-full font-semibold text-black" style={{ background: "#4ade80" }}>rajthalapari@gmail.com</a>
          <a href="tel:9818222066" className="px-8 py-4 rounded-full font-semibold text-white border border-gray-600 hover:border-green-400 transition">9818222066</a>
          <a href="https://www.linkedin.com/in/parisha-rajthala" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full font-semibold text-white border border-gray-600 hover:border-green-400 transition">LinkedIn</a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;