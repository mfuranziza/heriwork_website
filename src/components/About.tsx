import aboutUsImg from '../assets/about_us.png';

const About = () => {
  return (
    <div className="bg-[#F6F7FC] py-12 w-full">
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full h-auto">
    
    <div className="relative w-full md:w-1/2 flex items-center justify-center">
      <img
        src={aboutUsImg}
        alt="Main illustration"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>

    

  </div>
</div>

  );
};

export default About;
