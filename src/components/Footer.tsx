const Footer = () => {

    return (
  
        <footer className="bg-navy-700 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Team</a></li>
              <li><a href="#" className="hover:text-gray-300">Testimony</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Get In touch</h4>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center hover:text-gray-300"><i className="fab fa-instagram mr-2"></i>heriwork250</a></li>
              <li><a href="#" className="flex items-center hover:text-gray-300"><i className="fab fa-twitter mr-2"></i>heriwork250</a></li>
              <li><a href="#" className="flex items-center hover:text-gray-300"><i className="fas fa-phone-alt mr-2"></i>07181889988</a></li>
              <li><a href="#" className="flex items-center hover:text-gray-300"><i className="fab fa-whatsapp mr-2"></i>Join students WhatsApp</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">More Info</h4>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
        <div className="bg-navy-900 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 All rights reserved</p>
          </div>
        </div>
      </footer>
  
    );
  
  }
  
  export default Footer;

