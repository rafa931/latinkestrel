import { FaSpotify } from 'react-icons/fa';
import photo from '../assets/artist.webp';
import { useLanguage } from './LanguageContext';
import logo from '../assets/logo.JPG'; 


function Hero() {
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


  return (
    <section
    className='mt-28 rounded-lg'
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(34,34,34,0.9) 80%, #222 100%),
          url(${logo})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div id="home" className="hero-container flex flex-col justify-center ">
        <h1 className='text-center text-3xl font-bold'>{heroText.title[lang]}</h1>
        <p className='text-justify md:text-center text-lg mt-4'>
          {heroText.text[lang]}
        </p>

        <div className="mt-10 flex flex-row-reverse md:flex-row justify-center">

          <div className='flex-1 flex justify-center items-center'>

            <div className="mt-4 flex  sm:flex sm:flex-col sm:justify-center sm:items-center">
              <a href='#' className='flex flex-col items-center text-white '>
                <FaSpotify className='w-25 h-25 md:w-50 md:h-50 text-[#1DB954]' />
                <span className="mt-1  text-[#1DB954]">{heroText.listen[lang]}</span>
              </a>
              
            </div>

          </div>

          <div className='flex-1 justify-center flex'>
            <img
              src={photo}
              alt="Artist"
              className='w-34 h-34 md:w-64 md:h-64 object-cover rounded-full shadow-lg'
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;