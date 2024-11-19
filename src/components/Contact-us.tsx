const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 p-8 mb-10 max-w-6xl mx-auto">
      {/* Left Column */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">
          Get In <span className="text-orange-500">Touch</span>
        </h2>
        
        <p className="text-gray-600 mb-8 text-start">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-left">Address</h3>
              <p className="text-gray-600">ipsum is simply</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-left">Phone Number</h3>
              <p className="text-gray-600">+250-765-456-789</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-left">E-Mail</h3>
              <p className="text-gray-600">contact@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-left">
          <p className="text-gray-600">Are you a company that wants to collaborate?</p>
          <a href="#" className="text-[#192633] underline">Click here to register</a>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex-1 bg-[#F6F7FC] p-8">
        <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
        
        <form className="space-y-6">
          <div>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <textarea 
              placeholder="Message" 
              rows={4}
              className="w-full px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#192633] text-white py-3 px-6 hover:bg-orange-500 transition-colors"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;