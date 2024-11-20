
import heriworkLogo from '../assets/heriwork_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#F6F7FC] relative w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start md:w-1/4">
            <img 
              src={heriworkLogo} 
              alt="heriwork logo" 
              className="h-32 md:h-48 object-contain"
            />
          </div>

          {/* Quick Links Section */}
          <div className="md:w-1/4 space-y-2">
            <h4 className="text-lg font-bold text-center md:text-start">
              Quick Links
            </h4>
            <ul className="space-y-1 text-center md:text-start">
              <li>
                <a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-[#7A7A7A]">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Testimony</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="md:w-1/4 space-y-2">
            <h4 className="text-lg font-bold text-center md:text-start">
              Get In touch
            </h4>
            <ul className="space-y-1">
              <li className="flex justify-center md:justify-start">
                <a href="#" className="flex items-center hover:text-gray-300 text-[#7A7A7A]">
                  <i className="fab fa-instagram mr-2"></i>heriwork250
                </a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#" className="flex items-center hover:text-gray-300 text-[#7A7A7A]">
                  <i className="fab fa-twitter mr-2"></i>heriwork250
                </a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#" className="flex items-center hover:text-gray-300 text-[#7A7A7A]">
                  <i className="fas fa-phone-alt mr-2"></i>07181889988
                </a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#" className="flex items-center hover:text-gray-300 text-[#7A7A7A]">
                  <i className="fab fa-whatsapp mr-2"></i>Join students WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* More Info Section */}
          <div className="md:w-1/4">
            <h4 className="text-lg font-bold text-center md:text-start">
              More Info
            </h4>
            <p className="text-[#7A7A7A] text-center md:text-left">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#04192D] text-white font-semibold py-3 text-center">
        <p>&copy; All rights reserved 2024</p>
      </div>
    </footer>
  );
};

export default Footer;