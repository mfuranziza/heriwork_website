import p1Img from '../../public/images/partners/partner1.png';
import p2Img from '../../public/images/partners/partner2.png';
import p3Img from '../../public/images/partners/partner3.png';

const Partners = () => {
  return (
    <div className="bg-[#F6F7FC] py-12 w-full">
        
      <div className="flex flex-col items-center justify-center gap-4 w-full h-auto">
        <h2 className="text-3xl font-semibold text-gray-800">
          Our <span className="text-[#DD6A18]">Partners</span>
        </h2>
        <p className="px-4 sm:px-10 md:px-20 linehe lg:px-40 text-center text-sm sm:text-base md:text-base lg:text-base text-[#7A7A7A] leading-relaxed">
    Partnerships are Heriwork's catalyst for helping deserving students 
    achieve their academic dreams. By engaging our students in paid work, 
    our partners also equip them with the skills they need to thrive in tomorrow's workforce.
</p>

        
        <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
          <div>
            <img
              src={p1Img}
              alt="Partner 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <img
              src={p2Img}
              alt="Partner 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <img
              src={p3Img}
              alt="Partner 3"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
