import { FaApplePay, FaYoutube, FaSpotify, FaAmazon, FaDeezer, FaApple } from "react-icons/fa";
import { SiTidal, SiPandora } from "react-icons/si";
import { useLanguage } from './LanguageContext';

function SocialMediaMusic() {

    const links = {
        youtube: 'https://www.youtube.com/watch?v=PCT4iV2j1Is',
        spotify: 'https://open.spotify.com/track/14O9wOfEZ47PbY4IAWJ09f',
        amazon: 'https://music.amazon.com/tracks/B0FHJFT11Y',
        pandora: 'https://pandora.app.link/hZ8QJQ5qrVb',
        apple_music: 'https://music.apple.com/us/album/kosquillita-single/1826933751',
        dezzer: 'https://link.deezer.com/s/30CM8YNvWuTcjo3CVcd2P',
        tidal: 'https://tidal.com/browse/album/448033691?u',
    }

    const { lang } = useLanguage();
    const text = {
        text: {
            'en': "Listen to our Music",
            'es': "Escucha nuestra música"
        }
    };


    return (
        <>

            <div className="flex flex-col items-center justify-center mt-5 gap-4">
                <h2 className="text-2xl">{text.text[lang]}</h2>
                <a href={links.youtube} className="flex items-center w-full md:w-96 bg-white text-black rounded-3xl p-3">
                    <p className="text-center flex-1/2 font-bold">Latin Kestrel Youtube</p>
                    <FaYoutube className="text-2xl text-[#FF0000]" />
                </a>
                <a href={links.spotify} className="flex justify-between w-full md:w-96 bg-white text-black rounded-3xl p-3">
                    <p className="text-center flex-1/2 font-bold">Latin Kestrel Spotify</p>
                    <FaSpotify className="text-2xl text-[#1DB954]" />
                </a>
                <a href={links.apple_music} className="flex justify-between w-full md:w-96 bg-white text-black rounded-3xl p-3">
                    <p className="text-center flex-1/2 font-bold">Latin Kestrel Apple Music</p>
                    <FaApple className="text-2xl text-[#000000]" />
                </a>
                <a href={links.pandora} className="flex justify-between w-full md:w-96 bg-white text-black rounded-3xl p-3">
                    <p className="text-center flex-1/2 font-bold">Latin Kestrel Pandora</p>
                    <SiPandora className="text-2xl text-[#000]" />
                </a>
                <a href={links.amazon} className="flex justify-between w-full md:w-96 bg-white text-black rounded-3xl p-3">
                    <p className="text-center flex-1/2 font-bold">Latin Kestrel Amazon</p>
                    <FaAmazon className="text-2xl text-[#FF9900]" />
                </a>
                <a href={links.dezzer} className="flex justify-between w-full md:w-96 bg-white text-black rounded-3xl p-3">
                    <p className="text-center flex-1/2 font-bold">Latin Kestrel dezzer</p>
                    <FaDeezer className="text-2xl text-[#FF0092]" />
                </a>
                <a href={links.tidal} className="flex justify-between w-full md:w-96 bg-white text-black rounded-3xl p-3">
                    <p className="text-center flex-1/2 font-bold">Latin Kestrel tidal</p>
                    <SiTidal className="text-2xl text-[#000000]" />
                </a>
            </div>


        </>


    )

}

export default SocialMediaMusic;