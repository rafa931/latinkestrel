import { FaInstagram, FaFacebook, FaTiktok, FaSpotify } from "react-icons/fa";
import SocialMedia from "./SocialMedia";
import { useLanguage } from "./LanguageContext";

function Footer() {
  const { lang } = useLanguage();
  const footerText = {
    title: {
      'en': '© 2025 Latin Kestrel Production LLC. All rights reserved.',
      'es': '© 2025 Latin Kestrel Production LLC. Todos los derechos reservados.'
    },
    follow: {
      'en': 'Follow us on social media!',
      'es': '¡Síguenos en las redes sociales!'
    }
  };

  return (
    <footer className="footer mt-20 mb-4 p-6  text-white text-center">
      <p>{footerText.title[lang]}</p>
      <p>{footerText.follow[lang]}</p>
      <div>
        <SocialMedia />
      </div>
    </footer>
  );
}

export default Footer