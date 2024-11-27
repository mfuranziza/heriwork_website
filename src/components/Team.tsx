import React from 'react';

const Team = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800">
          Our <span className="text-[#DD6A18]">Team</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Let us help you find your education while advancing your career.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <img
              src="https://via.placeholder.com/150" 
              alt="Stephen Makoro"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-900">Stephen Makoro</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <img
              src="https://via.placeholder.com/150" 
              alt="Jessica Brown"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-900">Jessica Brown</h3>
              <p className="text-gray-600">Marketing Director</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <img
              src="https://via.placeholder.com/150" 
              alt="Mike Nandi"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-medium text-gray-900">Mike Nandi</h3>
              <p className="text-gray-600">Marketing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

