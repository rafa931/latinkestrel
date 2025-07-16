import { FaInstagram, FaFacebook, FaTiktok, FaSpotify } from "react-icons/fa";

function SocialMedia() {
  return (
    <>
        <div> 
          <ul className="flex justify-center space-x-6 mt-4">
            <li>
              <a href="">
                <FaInstagram className="text-2xl text-[#E1306C]" />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook className="text-2xl text-[#1877F2]" />
              </a>
            </li>
            <li>
              <a href="">
                <FaTiktok className="text-2xl text-[#69C9D0]" />
              </a>
            </li>
            <li>
              <a href="">
                <FaSpotify className="text-2xl text-[#1DB954]" />
              </a>
            </li>

          </ul>
        </div>
    </>
  )
}

export default SocialMedia;