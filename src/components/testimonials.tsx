  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Slider from "react-slick";

  const Testimonials = () => {
    const testimonials = [
      {
        name: "Michael Lenanyokie",
        university: "Strathmore University",
        feedback:
          "I appreciate the work heriwork is doing to connect students from humble backgrounds like myself to more work-study opportunities from outside the university.",
        image: "https://via.placeholder.com/80", 
      },
      {
        name: "Michael Lenanyokie",
        university: "Strathmore University",
        feedback:
          "I appreciate the work heriwork is doing to connect students from humble backgrounds like myself to more work-study opportunities from outside the university.",
        image: "https://via.placeholder.com/80", 
      },
      {
        name: "Michael Lenanyokie",
        university: "Strathmore University",
        feedback:
          "I appreciate the work heriwork is doing to connect students from humble backgrounds like myself to more work-study opportunities from outside the university.",
        image: "https://via.placeholder.com/80", 
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
      <div style={{ width: "100vw", padding: "40px 20px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}>
          What <span style={{ color: "#dd6a18", fontWeight: "bold" }}>Students</span> Say!
        </h2>
        <p style={{ fontSize: "1rem", color: "#555", marginBottom: "30px" }}>
          See how our platform helped some of the students achieve their goals.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <div
                style={{
                  border: "1px solid #ddd",
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
                    border: "2px solid #0737a5",
                  }}
                />
                <h3 style={{ marginBottom: "5px", color: "#0737a5", fontWeight: "bold" }}>
                  {testimonial.name}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "15px" }}>
                  Student at {testimonial.university}
                </p>
                <p style={{ fontSize: "0.9rem", color: "#777", lineHeight: "1.5" }}>
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

  export default Testimonials;