import { FaInstagram, FaFacebook, FaTiktok, FaSpotify } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer mt-20 mb-4 p-6  text-white text-center">
      <p>© 2025 My Project. All rights reserved.</p>
      <p>Follow us on social media!</p>
      <div>
        <ul className="flex justify-center space-x-6 mt-2">
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
    </footer>
  );
}

export default Footer