import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-text.png"   // ✅ FIXED: Works on Netlify
            className="w-32 h-auto"
            alt="Logo Text"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-pink-600">Home</a></li>
          <li><a href="#technologies" className="hover:text-pink-600">Technologies</a></li>
          <li><a href="#projects" className="hover:text-pink-600">Projects</a></li>
          <li><a href="#about" className="hover:text-pink-600">About</a></li>
          <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 font-medium hover:text-pink-600">
            Sign In
          </button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <a href="#home" className="hover:text-pink-600">Home</a>
          <a href="#technologies" className="hover:text-pink-600">Technologies</a>
          <a href="#projects" className="hover:text-pink-600">Projects</a>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>

          <button className="text-gray-700 font-medium hover:text-pink-600">
            Sign In
          </button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
