function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Parisha Rajthala</h1>
        <ul className="flex gap-6 text-gray-600 font-medium">
          <li>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-orange-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
