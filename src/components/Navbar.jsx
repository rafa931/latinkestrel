import { useState } from 'react';
import logo from '../assets/artist.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTiktok, FaSpotify, } from "react-icons/fa";
import SocialMedia from './SocialMedia';
import { useLanguage } from './LanguageContext';
import ReactCountryFlag from "react-country-flag";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const navBarText = {
    home: { 'en': 'Home', 'es': 'Inicio' },
    music: { 'en': 'Music', 'es': 'Música' },
    about: { 'en': 'About', 'es': 'Acerca de' },
    language: { 'en': 'EN', 'es': 'ES' },
    contact: { 'en': 'Contact', 'es': 'Contacto' },
    mail: 'productionslatinkestrel@gmail.com'
  }


  return (
    <nav className="nav-bar fixed top-0 left-0 w-full z-50 p-4 m-auto bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="inline-block w-12 h-12 rounded-full" />
          <h1 className="inline-block ml-4">Latin Kestrel</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <button
              className="hover:cursor-pointer text-white hover:text-blue-200 transition-colors flex items-center space-x-2"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            >
              <span>{lang === 'en' ?
                <ReactCountryFlag countryCode="US" svg style={{ width: "1.2em", height: "1.2em" }} />
                : <ReactCountryFlag countryCode="ES" svg style={{ width: "1.2em", height: "1.2em" }} />}</span>
              <span>
                {navBarText.language[lang]}
              </span>
            </button>
          </li>

          <li>
            <a href="#home" className="text-white hover:text-blue-200 transition-colors">
              {navBarText.home[lang]}
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/track/14O9wOfEZ47PbY4IAWJ09f?si=K-8bYdOrRJmwxTudASzvJQ&context=spotify%3Atrack%3A14O9wOfEZ47PbY4IAWJ09f" className="text-white hover:text-blue-200 transition-colors">
              {navBarText.music[lang]}
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors">
              {navBarText.about[lang]}
            </a>
          </li>
        </ul>

        {/*Button Language Mobile */}
        <div className="md:hidden">
          <button
            className="hover:cursor-pointer text-white hover:text-blue-200 transition-colors flex items-center space-x-2"
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          >
            <span>{lang === 'en' ?
              <ReactCountryFlag countryCode="US" svg style={{ width: "1.2em", height: "1.2em" }} />
              : <ReactCountryFlag countryCode="ES" svg style={{ width: "1.2em", height: "1.2em" }} />}</span>
            <span>
              {navBarText.language[lang]}
            </span>
          </button>
        </div>

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
              href="#home"
              className="text-white text-xl hover:text-blue-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {navBarText.home[lang]}
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/track/14O9wOfEZ47PbY4IAWJ09f?si=K-8bYdOrRJmwxTudASzvJQ&context=spotify%3Atrack%3A14O9wOfEZ47PbY4IAWJ09f"
              className="text-white text-xl hover:text-blue-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {navBarText.music[lang]}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-xl hover:text-blue-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {navBarText.about[lang]}
            </a>
          </li>
        </ul>
        
        

        <div className="fixed bottom-0 left-0 w-full bg-black p-4">
          <div>
            <p className="text-white">
              {navBarText.contact[lang]} <span style={{color:'blue', fontSize: '14px'}}>{navBarText.mail}</span>
            </p>

          </div>
        
          
          <SocialMedia />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;