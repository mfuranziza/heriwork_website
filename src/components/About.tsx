import aboutUsImg from '../assets/about_us.png';

const About = () => {
  return (
    <div className="bg-[#F6F7FC] py-12 w-full">
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full h-auto">
    
    <div className="relative w-full md:w-1/3 flex items-center justify-center">
      <img
        src={aboutUsImg}
        alt="Main illustration"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>

    <div className="w-full md:w-1/2 text-center md:text-left ml-20">
      <h2 className="text-3xl font-semibold text-gray-800">
        About <span className="text-[#DD6A18]">Us</span>
      </h2>
      <p className="mt-4 mr-20 text-[#7A7A7A] leading-relaxed">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
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
