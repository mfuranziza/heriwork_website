import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import student1 from "../../public/images/testimonials/student1.jpg";
import student2 from "../../public/images/testimonials/student2.jpg";
import student3 from "../../public/images/testimonials/student3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Kabunya",
      university: "Strathmore University",
      feedback:
        "I appreciate the work heriwork is doing to connect students from humble backgrounds like myself to more work-study opportunities from outside the university.",
      image: student1,
    },
    {
      name: "Lora Chikuyu",
      university: "Strathmore University",
      feedback:
        "I appreciate the work heriwork is doing to connect students from humble backgrounds like myself to more work-study opportunities from outside the university.",
      image: student2,
    },
    {
      name: "Ibanda Ken",
      university: "Strathmore University",
      feedback:
        "I appreciate the work heriwork is doing to connect students from humble backgrounds like myself to more work-study opportunities from outside the university.",
      image: student3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{ width: "100vw", padding: "40px 0px 60px 0px" }}
      className="bg-[#F6F7FC]"
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        <h2
          className=" font-semibold text-3xl text-[#04192D]"
          style={{ marginBottom: "10px" }}
        >
          What <span style={{ color: "#dd6a18" }}>Students</span> Say!
        </h2>
        <p
          className="pb-4"
          style={{ fontSize: "1rem", color: "#555", marginBottom: "30px" }}
        >
          See how our platform helped some of the students achieve their goals.
        </p>
        <Slider {...settings} className="  ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-8 pb-2"
              style={{ padding: "0 10px" }}
            >
              <div
                style={{
                  borderRadius: "10px",
                  padding: "20px",
                  background: "#fff",
                  textAlign: "center",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "300px",
                }}
              >
                <div
                  className="pt-4 pl-2"
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "20px",
                    fontSize: "4rem",
                    color: "#f2f2f2",
                  }}
                >
                  &ldquo;
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    marginBottom: "15px",
                    objectFit: "cover",
                  }}
                />
                <h3
                  style={{
                    marginBottom: "5px",
                    color: "#04192D",
                    fontWeight: "bold",
                  }}
                >
                  {testimonial.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#555",
                    marginBottom: "15px",
                  }}
                >
                  Student at {testimonial.university}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#777",
                    lineHeight: "1.5",
                  }}
                >
                  <i>"{testimonial.feedback}"</i>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
