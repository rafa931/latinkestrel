import { FaSpotify } from 'react-icons/fa';
import photo from '../assets/artist.webp';
import { useLanguage } from './LanguageContext';
import logo from '../assets/logo-2.webp'; 
import logo2 from '../assets/logo.JPG';

import SocialMediaComp from './SocialMediaComp';


function Hero({children}) {
  const { lang } = useLanguage();

  const heroText = {
    text: {
      'en': 'Experience the latest album and join the musical journey!',
      'es': '¡Experimenta el último álbum y únete a la aventura musical!'
    },
    title: {
      'en': 'Latin Kestrel',
      'es': 'Latin Kestrel'
    },
    listen: {
      'en': 'Listen on Spotify',
      'es': 'Escucha en Spotify'
    }
  }

  const spotify = {
    spotify: "https://open.spotify.com/track/14O9wOfEZ47PbY4IAWJ09f?si=K-8bYdOrRJmwxTudASzvJQ&context=spotify%3Atrack%3A14O9wOfEZ47PbY4IAWJ09f"
  }


  return (
    <section id="home"
    className='mt-22 rounded-lg'
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(34,34,34,0.6) 80%, #222 100%),
          url(${logo})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div  className="hero-container flex flex-col justify-center ">
        <div className='flex justify-center items-center gap-4'>
          <img src={logo2} alt="Logo" className="inline-block w-13 h-13 md:w-15 md:h-15 rounded-full ml-2 mt-1" />        
          <h1 className='text-center text-3xl font-bold flex-1/2 mr-16'>{heroText.title[lang]}</h1>
        </div>
        
        <p className='text-justify md:text-center text-lg mt-4 mb-49'>
          {heroText.text[lang]}
        </p>

        {children}
      </div>
    </section>
  );
}

export default Hero;