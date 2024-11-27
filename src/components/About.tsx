import aboutUsImg from '../../public/images/about_us.png';

const About = () => {
  return (
    <div className="py-12 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full h-auto px-4 sm:px-10 md:px-20 lg:px-32">
        
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <img
            src={aboutUsImg}
            alt="Main illustration"
            className="w-full max-w-md h-auto object-cover rounded-lg"
          />
        </div>

        <div className="ml-10 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            About <span className="text-[#DD6A18]">Us</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#7A7A7A] leading-relaxed">
            Many talented students from humbe backgrounds face unprecedented 
            financial strain on joining campus. <b>Heriwork</b> is a platform that
            connects potential employers to talented students who work to
            finance their education, by engaging these students in
            paid part-time work, you help them to raise funds for fees & upkeep. 
          </p>
          <button className="mt-6 bg-[#04192D] text-white px-6 py-2 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;