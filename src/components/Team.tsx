import ceoImg from '../../public/images/stephenCeo.jpeg';
import person1 from "../../public/images/person1.jpg"
import person2 from "../../public/images/person2.jpg"
const Team = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto text-center  ">
        <h2 className="text-3xl  text-gray-900 mb-2  font-semibold ">Our <span className="text-[#DD6A18]">Team</span></h2>

        <p className=" text-[#7A7A7A] ">
          Let us help you find your education while advancing your career.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {/* Team Member 1 */}
          <div className="bg-white flex justify-center p-6 rounded-lg shadow-sm hover:bg-[#f9f9f9]">
            <div>
            <img
              src={ceoImg}
              alt="Stephen Makoro"
              className=" w-600 h-60 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                Stephen Makoro
              </h3>
              <p className="text-[#7A7A7A]">Founder & CEO</p>
            </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white  flex justify-center p-6 rounded-lg shadow-sm hover:bg-[#f9f9f9]">
            <div>
            <img
              src={person1}
              alt="Jessica Brown"
              className=" w-600 h-60 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                Jessica Brown
              </h3>
              <p className="text-[#7A7A7A]">Operations Manager</p>
            </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white flex justify-center p-6 rounded-lg shadow-sm hover:bg-[#f9f9f9]">
            <div>
            <img
              src={person2}
              alt="Mandy Nandi"
              className=" w-600 h-60 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Kendy Nandi</h3>
              <p className="text-[#7A7A7A]">Marketing Director</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
