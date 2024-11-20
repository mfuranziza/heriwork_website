import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Stephen Makoro",
      role: "Founder & CEO",
      image: "path-to-photo1.jpg",
      linkedin: "https://linkedin.com/in/stephenmakoro",
    },
    {
      name: "Jessica Brown",
      role: "Marketing Director",
      image: "path-to-photo2.jpg",
      linkedin: "https://linkedin.com/in/jessicabrown",
    },
    {
      name: "Mike Nandi",
      role: "Marketing Director",
      image: "path-to-photo3.jpg",
      linkedin: "https://linkedin.com/in/mikenandi",
    },
  ];

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <p>Let us help you fund your education while advancing your career.</p>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src="path-to-linkedin-icon.png"
                alt="LinkedIn"
                className="linkedin-icon"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
