function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="text-orange-500">Parisha Rajthala</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Frontend Developer — Building clean and responsive web interfaces
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
