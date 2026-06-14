
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50  ${
    scrolled
      ? "bg-white/80 backdrop-blur-md shadow-md"
      : "bg-transparent"
  }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className={`text-xl font-bold ${scrolled ? "text-blue-900" : "text-blue-900"}`}>
          Nahar Group
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>

          {/* DROPDOWN */}
          <div
            className="relative"
          >
           

            <div className="relative group">
  
  <button className="hover:text-blue-500">
    Sister Concerns
  </button>

  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

    <div className="bg-white shadow-xl rounded w-64 p-4 space-y-2">
      
      <Link to="/company/healthcare" className="block hover:text-blue-500">
        Green City Hospital
      </Link>

      <Link to="/company/healthcare" className="block hover:text-blue-500">
        Nahar Specialized Hospital
      </Link>

      <Link to="/company/agro" className="block hover:text-blue-500">
        Nahar Agro
      </Link>

      <Link to="/company/builders" className="block hover:text-blue-500">
        Nahar Builders
      </Link>

      <Link to="/company/foods" className="block hover:text-blue-500">
        Nahar Foods
      </Link>

      <Link to="/company/resort" className="block hover:text-blue-500">
        Nahar Resort
      </Link>

    </div>

  </div>
</div>
          </div>

          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>

        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4">

          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>
          <Link className="block">Sister Concerns</Link>
          <Link to="/contact" className="block">Contact</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;