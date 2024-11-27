import { Navigation } from './Navigation';

export const Home = () => {
  return (
    <div className="h-screen bg-[url('/public/images/bg.png')] bg-cover bg-center w-screen">
      {/* Navigation */}
      <div>
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="text-center flex items-center justify-center mx-4 md:mx-14 px-4 ">
        <div className="py-16 space-y-4 ">
          {/* Main Heading */}
          <p className="font-bold sm:leading-[0] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl line">
  Empowering students through job and internship opportunities to support their education!
</p>



          {/* Subheading */}
          <p className="text-sm typing-effect sm:text-base md:text-lg text-[#D8E4FF]">
            Explore a wide range of career-building opportunities
          </p>

          {/* Button */}
          <div className="pt-8 sm:pt-12">
            <button className="focus:outline-none bg-[#DD6A18] text-[white] w-40 sm:w-48  md:w-52 lg:w-56 rounded-b-lg font-bold rounded-tr-lg py-3">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
