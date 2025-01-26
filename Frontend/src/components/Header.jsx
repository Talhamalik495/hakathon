import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-lg text-gray-800">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-32 h-auto" />
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link to={"/"} className="hover:text-gray-600">
          Home
        </Link>
        <Link to={""} className="hover:text-gray-600">
          About
        </Link>
        <Link to={""} className="hover:text-gray-600">
          Services
        </Link>
        <Link to={""} className="hover:text-gray-600">
          Contact
        </Link>
      </nav>

      {/* Right Side: Avatar */}
      <div className="hidden md:block">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/029/364/950/small/3d-carton-of-boy-going-to-school-ai-photo.jpg"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 z-50 p-6">
          <ul className="space-y-6 text-center text-white">
            <li>
              <a href="#home" className="block" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="block" onClick={toggleMenu}>
                Contact
              </a>
            </li>
            <li>
              <a href="#avatar" className="block" onClick={toggleMenu}>
                Avatar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
