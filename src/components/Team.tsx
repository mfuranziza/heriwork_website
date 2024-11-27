import ceoImg from '../../public/images/stephenCeo.jpeg';

const Team = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our <span className="text-[#DD6A18]">Team</span></h2>

        <p className="text- text-[#7A7A7A] ">
          Let us help you find your education while advancing your career.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:bg-[#f9f9f9]">
            <img
              src={ceoImg}
              alt="Stephen Makoro"
              className="ml-10 w-600 h-60 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                Stephen Makoro
              </h3>
              <p className="text-[#7A7A7A]">Founder & CEO</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:bg-[#f9f9f9]">
            <img
              src={ceoImg}
              alt="Jessica Brown"
              className="ml-10 w-600 h-60 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                Jessica Brown
              </h3>
              <p className="text-[#7A7A7A]">Marketing Director</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:bg-[#f9f9f9]">
            <img
              src={ceoImg}
              alt="Mike Nandi"
              className="ml-10 w-600 h-60 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Mike Nandi</h3>
              <p className="text-[#7A7A7A]">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
