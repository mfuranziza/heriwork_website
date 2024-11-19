
import heriworkLogo from '../assets/heriwork_logo.png';
const Footer = () => {

    return (
  
      <footer className="bg-[#F6F7FC] absolute right-0 left-0 bottom-0 w-full">
  <div className="container mx-auto flex mt-10">
    <img src={heriworkLogo} alt="heriwork logo" className="h-48 pr-20" />
    <div className="w-1/3 space-y-2">
      <h4 className="text-lg font-bold text-start">Quick Links</h4>
      <ul className="space-y-1 text-start">
        <li><a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Home</a></li>
        <li><a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Services</a></li>
        <li><a href="#" className="hover:text-gray-300 text-[#7A7A7A]">About Us</a></li>
        <li><a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Team</a></li>
        <li><a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Testimony</a></li>
        <li><a href="#" className="hover:text-gray-300 text-[#7A7A7A]">Contact Us</a></li>
      </ul>
    </div>
    <div className="w-1/3 space-y-2">
      <h4 className="text-lg font-bold text-start">Get In touch</h4>
      <ul className="space-y-1">
        <li><a href="#" className="flex items-center hover:text-gray-300 text-[#7A7A7A]"><i className="fab fa-instagram mr-2"></i>heriwork250</a></li>
        <li><a href="#" className="flex items-center hover:text-gray-300 text-[#7A7A7A]"><i className="fab fa-twitter mr-2"></i>heriwork250</a></li>
        <li><a href="#" className="flex items-center hover:text-gray-300 text-[#7A7A7A]"><i className="fas fa-phone-alt mr-2"></i>07181889988</a></li>
        <li><a href="#" className="flex items-center hover:text-gray-300 text-[#7A7A7A]"><i className="fab fa-whatsapp mr-2"></i>Join students WhatsApp</a></li>
      </ul>
    </div>
    <div className="w-1/3">
      <h4 className="font-bold text-start">More Info</h4>
      <p className='text-[#7A7A7A] text-left'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </div>
  </div>
  <div className="bg-[#192633] text-white py-3 mt-4 text-center">
    <p>&copy; 2024 All rights reserved</p>
  </div>
</footer>
  
    );
  
  }
  
  export default Footer;

