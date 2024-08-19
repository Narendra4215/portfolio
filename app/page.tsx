"use client"; // This tells Next.js to treat this file as a Client Component
import  "./page.scss";

import { useState, useEffect } from "react";
export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [isBachelorOpen, setIsBachelorOpen] = useState(false);
  const [isHighSchoolOpen, setIsHighSchoolOpen] = useState(false);
  const [isDiplomaOpen, setIsDiplomaOpen] = useState(false);
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "SCSS", percentage: 80 },
    { name: "TailWind", percentage: 75 },
    { name: "Bootstrap", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "jQuery", percentage: 70 },
    { name: "React.js", percentage: 85 },
    { name: "Next.js", percentage: 75 },
    { name: "TypeScript", percentage: 80 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const id = section.getAttribute("id") || ""; // Add default empty string if id is null
        if (window.scrollY >= sectionTop - 50) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div>
      {/* Left Side Navigation */}
      <nav style={{ width: "200px", position: "fixed" }} className="side-nav">
        <ul style={{ listStyle: "none", padding: "20px" }} className="side-nav-ul">
          <li
            key="profile"
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "profile" ? "bold" : "normal",
            }}
            onClick={() => handleClick("profile")}
          >
            Profile
          </li>
          <li
            key="work"
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "work" ? "bold" : "normal",
            }}
            onClick={() => handleClick("work")}
          >
            Work
          </li>
          <li
            key="skills"
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "skills" ? "bold" : "normal",
            }}
            onClick={() => handleClick("skills")}
          >
            Skills
          </li>
          <li
            key="education"
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "education" ? "bold" : "normal",
            }}
            onClick={() => handleClick("education")}
          >
            Education
          </li>
          <li
            key="about"
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "about" ? "bold" : "normal",
            }}
            onClick={() => handleClick("about")}
          >
            About
          </li>
        </ul>
      </nav>

      {/* Right Side Content */}
      <div style={{padding: "20px" }} className="ml-[220px] max-md:ml-0">
        <section id="profile" style={{ padding: "50px 0" }}>
          <h2>
            Hi, I M Narendra Seerla <br /> Frontend Developer
          </h2>
          {/* <p>Your profile details...</p> */}
        </section>

        <section id="work" style={{ padding: "50px 0" }} className="work">
          <h2 className="work-exp">Experiance</h2>
          <div className="work-role">React Js Developer</div>
          <p className="work-com">CODILAR TECHNOLOGIES PVT. LTD.</p>

          <div className="work-project mt-[10px]">
            <div className="flex justify-between mb-[10px] font-bold">
              <span>Project - 1 : Tafe</span>
              <span>May - 2023 to Dec - 2023</span>
            </div>
            <div className="w-[70%]">
              <p>
                Tafe. It is an Australian Project. The Site TAFE Queensland is the
                most experienced training provider. And they deliver practical,
                industry-relevant training across a range of industries from
                entry-level certificates to bachelor degrees, at more than 50
                locations in Queensland.
              </p>
              <a href="https://tafeqld.edu.au/">URL: tafeqld</a>
            </div>
          </div>
          <div className="work-role">AEM Developer</div>
          <p className="work-com">CODILAR TECHNOLOGIES PVT. LTD.</p>

          <div className="work-project mt-[10px]">
            <div className="flex justify-between mb-[10px] font-bold">
              <span>Project - 2 : BirdSong</span>
              <span>Jan - 2024 to Apr - 2024</span>
            </div>
            <div className="w-[70%]">
              <p>
                The Birdsong Project is a collection of 172 pieces of new music
                inspired by the beauty of birdsong, performed by artists from across
                the musical spectrum.
              </p>
            </div>
          </div>

          <div className="work-role">AEM Developer</div>
          <p className="work-com">CODILAR TECHNOLOGIES PVT. LTD.</p>

          <div className="work-project mt-[10px]">
            <div className="flex justify-between mb-[10px] font-bold ">
              <span>Project - 3 : WSU (Western Sydney University)</span>
              <span>Apr - 2024 to Aug-2024</span>
            </div>
            <div className="w-[70%]">
              <p>
                Western Sydney University. It is an Australian multi-campus public
                research university in the Greater Western region of Sydney, New
                South Wales, Australia.
              </p>
              <a href="https://www.westernsydney.edu.au/">
                URL: Western Sydney University
              </a>
            </div>
          </div>

        </section>

  <section id="skills" style={{ padding: "50px 0" }}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-percentage"
                style={{ width: `${skill.percentage}%` }}
              >
                {skill.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

{/* 
<section id="education" className="education-section">
  <h2>Education</h2>
  <div className="accordion-item">
    <h3
      onClick={() => setIsBachelorOpen(!isBachelorOpen)}
      className={`accordion-title ${isBachelorOpen ? "open" : ""}`}
    >
      Bachelor of Technology
    </h3>
    {isBachelorOpen && (
      <div>
        <span>MeRITS College</span>
        <span>2019 - 2023</span>
      </div>
    )}
  </div>
  <div className="accordion-item">
    <h3
      onClick={() => setIsHighSchoolOpen(!isHighSchoolOpen)}
      className={`accordion-title ${isHighSchoolOpen ? "open" : ""}`}
    >
      Diploma 
    </h3>
    {isHighSchoolOpen && (
      <div>
        <span>Govt.Polytechniv Nellore</span>
        <span>2016 - 2019</span>
      </div>
    )}
  </div>
  <div className="accordion-item">
    <h3
      onClick={() => setIsHighSchoolOpen(!isHighSchoolOpen)}
      className={`accordion-title ${isHighSchoolOpen ? "open" : ""}`}
    >
      High School
    </h3>
    {isHighSchoolOpen && (
      <div>
        <span>SRI SAI SCHOOL</span>
        <span>2015 - 2016</span>
      </div>
    )}
  </div>
</section> */}

<section id="education" className="education-section">
  <h2>Education</h2>

  <div className="accordion-item">
    <h3
      onClick={() => setIsBachelorOpen(!isBachelorOpen)}
      className={`accordion-title ${isBachelorOpen ? "open" : ""}`}
    >
      Bachelor of Technology
    </h3>
    {isBachelorOpen && (
      <div className="flex justify-between">
        <span>MeRITS College</span>
        <span>2019 - 2023</span>
      </div>
    )}
  </div>

  <div className="accordion-item">
    <h3
      onClick={() => setIsDiplomaOpen(!isDiplomaOpen)}
      className={`accordion-title ${isDiplomaOpen ? "open" : ""}`}
    >
      Diploma 
    </h3>
    {isDiplomaOpen && (
      <div className="flex justify-between">
        <span>Govt.Polytechnic Nellore</span>
        <span>2016 - 2019</span>
      </div>
    )}
  </div>

  <div className="accordion-item">
    <h3
      onClick={() => setIsHighSchoolOpen(!isHighSchoolOpen)}
      className={`accordion-title ${isHighSchoolOpen ? "open" : ""}`}
    >
      High School
    </h3>
    {isHighSchoolOpen && (
      <div className="flex justify-between">
        <span>SRI SAI SCHOOL</span>
        <span>2015 - 2016</span>
      </div>
    )}
  </div>

</section>

<section id="about" className="about-section flex justify-between max-md:flex-col gap-[37px]">
  <div>
  <h2>About</h2>
  <p>For any inquiries, feel free to reach out to me:</p>
  <p>
    <strong>Email:</strong> seerlanarendra113@gmail.com
  </p>
  <p>
    <strong>Phone:</strong> +91 8522824245
  </p>
  </div>
<div>
  <a href="/narendra_resume.pdf" className="download-cv" download>
    Download CV
  </a>
</div>
</section>
      </div>
    </div>
  );
}
