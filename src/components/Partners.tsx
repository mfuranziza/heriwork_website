import p1Img from '../../public/images/partners/partner1.png';
import p2Img from '../../public/images/partners/partner2.png';
import p3Img from '../../public/images/partners/partner3.png';

const Partners = () => {
  return (
    <div className="bg-white py-12 w-full">
        
      <div className="flex flex-col items-center justify-center gap-4 w-full h-auto">
        <h2 className="text-3xl font-semibold text-gray-800">
          Our <span className="text-[#DD6A18]">Partners</span>
        </h2>
        <p className="mt-3 text-center leading-relaxed text-[#7A7A7A]">
          Let us help you fund your education while advancing your career.
        </p>

        
        <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
          <div>
            <img
              src={p1Img}
              alt="Partner 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src={p2Img}
              alt="Partner 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src={p3Img}
              alt="Partner 3"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
