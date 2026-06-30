import { motion } from 'framer-motion';


function Hero() {
  
  return (
    <section
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
      style={{ background: '#0a0f0d' }}
    >
      {/* background blobs */}
      <div
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: '#4ade80' }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-10 blur-3xl"
        style={{ background: '#4ade80' }}
      ></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.p
            className="text-sm font-medium mb-4 tracking-widest uppercase"
            style={{ color: '#4ade80' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-6xl md:text-7xl font-black text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <br />
            <span style={{ color: '#4ade80' }}>Parisha</span>
            <br />
            Rajthala
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg mb-10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend Developer — Building clean and responsive web interfaces with React.js
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-semibold text-black transition hover:opacity-90"
              style={{ background: '#4ade80' }}
            >
              View My Work
            </a>

            <a
              href="/Parisha_Rajthala_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-black transition hover:opacity-90"
              style={{ background: '#4ade80' }}
            >
              View CV
            </a>

            <a
              href="/Parisha_Rajthala_CV.pdf"
              download
              className="px-8 py-4 rounded-full font-semibold text-white border border-gray-600 hover:border-green-400 transition"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div
              className="absolute w-72 h-72 rounded-full border-2 opacity-50 animate-pulse"
              style={{ borderColor: '#4ade80' }}
            ></div>

            <div
              className="absolute w-60 h-60 rounded-full border opacity-30"
              style={{ borderColor: '#4ade80' }}
            ></div>

            <div
              className="w-52 h-52 rounded-full flex items-center justify-center text-6xl"
              style={{
                background: 'rgba(74, 222, 128, 0.1)',
                border: '2px solid #4ade80',
              }}
            >
              PR
            </div>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
}

export default Hero;