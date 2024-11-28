const JobListing = () => {
  const jobListings = [
    {
      title: "Customer Service Remote Agent Position",
      location: "Bank of Kenya | Kilimani",
      publishedDate: "06-11-2024",
      deadline: "29-11-2024",
      image: "/images/01.png",
    },
    {
      title: "Customer Service Remote Agent Position",
      location: "Bank of Kenya | Kilimani",
      publishedDate: "06-11-2024",
      deadline: "29-11-2024",
      image: "/images/op2.jpg",
    },
    {
      title: "Customer Service Remote Agent Position",
      location: "Bank of Kenya | Kilimani",
      publishedDate: "06-11-2024",
      deadline: "29-11-2024",
      image: "/images/opp.jpg",
    },
  ];

  return (
    <div className="mt-10 container mx-auto py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Available <span className="text-[#DD6A18]">Opportunities</span>
        </h2>
      </div>

      <div className="mb-8 flex justify-center items-center">
        <input
          type="text"
          placeholder="Job Title, Keywords, or Company"
          className="bg-[#F6F7FC] w-full max-w-lg px-6 py-4 border-none rounded-l-md focus:outline-none"
        />
        <button className="px-6 py-4 bg-[#0f2235] text-white rounded-r-md hover:bg-[#04192D]">
          Search
        </button>
      </div>

      <div className="grid gap-6">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center bg-white shadow-sm rounded-md p-4 hover:shadow-md transition-shadow"
          >
            <img
              src={job.image}
              alt={job.title}
              className="w-full md:w-1/4 h-40 object-cover rounded-md"
            />
            <div className="flex-1 mt-4 md:mt-0 md:ml-6">
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-sm text-gray-500">
                Published on: {job.publishedDate} | Deadline: {job.deadline}
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 border-none focus:outline-none">
              Apply ➜
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        {/* <button className="px-4 py-2 bg-[#04192D] text-white rounded-md hover:bg-[#0f2235]">
          View more 
        </button> */}
      </div>
    </div>
  );
};

export default JobListing;
