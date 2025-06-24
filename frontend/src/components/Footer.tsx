import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 EnglishPro - Todos los derechos reservados</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-indigo-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-indigo-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-indigo-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-indigo-300 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
