import { FaSpotify } from 'react-icons/fa';
import photo from '../assets/artist.webp';



function Hero() {
  return (
    <>
      <div className="hero-container flex flex-col justify-center mt-10">
        <h1 className='text-center text-3xl font-bold'>Latin Kestrel</h1>
        <p className='text-justify md:text-center text-lg mt-4'>
          New artists blending Latin rhythms with modern sounds.<br />
          Experience the latest album and join the musical journey!
        </p>

        <div className="mt-10 flex flex-row-reverse md:flex-row justify-center">

          <div className='flex-1 flex justify-center items-center'>

            <div className="mt-4 flex  sm:flex sm:flex-col sm:justify-center sm:items-center">
              <a href='#' className='flex flex-col items-center text-white '>
                <FaSpotify className='w-25 h-25 md:w-50 md:h-50 text-[#1DB954]' />
                <span className="mt-1  text-[#1DB954]">Listen on Spotify</span>
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
    </>
  );
}

export default Hero;