function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4" style={{ background: "rgba(10, 15, 13, 0.8)", backdropFilter: "blur(10px)" }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold" style={{ color: "#4ade80" }}>PR</h1>
        <ul className="flex gap-8 text-sm font-medium text-gray-400">
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>
        <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-full border transition" style={{ borderColor: "#4ade80", color: "#4ade80" }}>Hire Me</a>
      </div>
    </nav>
  );
}

export default Navbar;