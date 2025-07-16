import { FaInstagram, FaFacebook, FaTiktok, FaSpotify, FaYoutube } from "react-icons/fa";

function SocialMedia() {
  const socialLinks = {
    'instagram': 'https://www.instagram.com/latin_kestrel?igsh=MTRnaTdsYzNiNWJibw==',
    'facebook': 'https://www.facebook.com/share/18y1qQowRB/?mibextid=wwXIfr',
    'tiktok': 'https://www.tiktok.com/@latin.kestrel?_t=ZP-8yBk9VbFJN9&_r=1',
    'spotify': 'https://open.spotify.com/artist/6b1a2d5c3f4e8c9b0f7e8c?si=1234567890abcdef',
    'youtube': 'https://youtube.com/@latinkestrel?si=kPHMwThM4EogsN1U'
  }

  return (
    <>
        <div id="social-media"> 
          <ul className="flex justify-center space-x-6 mt-4">
            <li>
              <a href={socialLinks.instagram}>
                <FaInstagram className="text-2xl text-[#E1306C]" />
              </a>
            </li>
            <li>
              <a href={socialLinks.facebook}>
                <FaFacebook className="text-2xl text-[#1877F2]" />
              </a>
            </li>
            <li>
              <a href={socialLinks.tiktok}>
                <FaTiktok className="text-2xl text-[#69C9D0]" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSpotify className="text-2xl text-[#1DB954]" />
              </a>
            </li>
            <li>
              <a href={socialLinks.youtube}>
                <FaYoutube className="text-2xl text-[#FF0000]" />
              </a>
            </li>


          </ul>
        </div>
    </>
  )
}

export default SocialMedia;