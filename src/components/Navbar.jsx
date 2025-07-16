import { useState } from 'react';
import logo from '../assets/logo.JPG';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTiktok, FaSpotify } from "react-icons/fa";
import SocialMedia  from './SocialMedia';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar p-4 m-auto bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="inline-block w-12 h-12 rounded-full" />
          <h1 className="inline-block ml-4">Latin Kestrel</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              Music
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              About
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-8 mt-10">
          <li>
            <a
              href="#"
              className="text-white text-xl hover:text-blue-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-xl hover:text-blue-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Music
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-xl hover:text-blue-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
        </ul>

        <div className="fixed bottom-0 left-0 w-full bg-black p-4"> 
          <SocialMedia />

        </div>

      </div>
    </nav>
  );
}

export default Navbar;