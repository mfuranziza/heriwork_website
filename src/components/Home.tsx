import { Navigation } from './Navigation';

export const Home = () => {
  return (
    <div className="h-screen bg-[url('/public/images/bg.png')] bg-cover bg-center w-full">
      {/* Navigation */}
      <div>
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="mt-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="text-center max-w-[1000px] mx-auto space-y-4">
          {/* Main Heading */}
          <p className="font-bold text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl line">
            Empowering students through job and internship opportunities to support their education!
          </p>

          {/* Subheading */}
          <p className="text-xs  typing-effect xs:text-sm sm:text-base md:text-lg text-[#D8E4FF] mx-auto max-w-[600px]">
            Explore a wide range of career-building opportunities
          </p>

          {/* Button */}
          <div className="pt-4 xs:pt-6 sm:pt-8 md:pt-12">
            <button className="focus:outline-none bg-[#DD6A18] text-white 
              w-32 xs:w-40 sm:w-48 md:w-52 lg:w-56 
              rounded-b-lg font-bold rounded-tr-lg 
              py-2 xs:py-3 
              text-sm sm:text-base">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};