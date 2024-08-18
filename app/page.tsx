"use client"; // This tells Next.js to treat this file as a Client Component

import { useState, useEffect } from "react";
// import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [isBachelorOpen, setIsBachelorOpen] = useState(false); // State for Bachelor accordion
  const [isHighSchoolOpen, setIsHighSchoolOpen] = useState(false); // State for High School accordion

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div>
      {/* Left Side Navigation */}
      <nav style={{ width: "200px", position: "fixed" }} className="side-nav">
        <ul style={{ listStyle: "none", padding: "20px" }} className="side-nav-ul">
          <li
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "profile" ? "bold" : "normal",
            }}
            onClick={() => handleClick("profile")}
          >
            Profile
          </li>
          <li
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "work" ? "bold" : "normal",
            }}
            onClick={() => handleClick("work")}
          >
            Work
          </li>
          <li
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "skills" ? "bold" : "normal",
            }}
            onClick={() => handleClick("skills")}
          >
            Skills
          </li>
          <li
            style={{
              cursor: "pointer",
              fontWeight: activeSection === "education" ? "bold" : "normal",
            }}
            onClick={() => handleClick("education")}
          >
            Education
          </li>
          <li
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
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <section id="profile" style={{ padding: "50px 0" }}>
          <h2>
            Hi, I'M Narendra Seerla <br /> Frontend Developer
          </h2>
          {/* <Image src="/profile.jpg" alt="Profile Image" width={100} height={100} /> */}
          <p>Your profile details...</p>
        </section>

        <section id="work" style={{ padding: "50px 0" }}>
          <h2>Work</h2>
          <p>CODILAR TECHNOLOGIES PVT. LTD.</p>
          <div>
            <div className="flex justify-between">
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
          <div>
            <div className="flex justify-between">
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
          <div>
            <div className="flex justify-between">
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
          <div>
            <div>HTML</div>
            <div>SCSS</div>
            <div>TailWind</div>
            <div>Bootstrap</div>
            <div>JavaScript</div>
            <div>jQuery</div>
            <div>React.js</div>
            <div>Next.js</div>
            <div>TypeScript</div>
          </div>
        </section>

        {/* Education Section with Accordion */}
        <section id="education" style={{ padding: "50px 0" }}>
          <h2>Education</h2>
          <div>
            <h3
              onClick={() => setIsBachelorOpen(!isBachelorOpen)}
              style={{ cursor: "pointer" }}
            >
              Bachelor of Technology {isBachelorOpen ? "▲" : "▼"}
            </h3>
            {isBachelorOpen && (
              <div>
                <span>MeRITS College</span>
                <span>2019 - 2023</span>
              </div>
            )}
          </div>
          <div>
            <h3
              onClick={() => setIsHighSchoolOpen(!isHighSchoolOpen)}
              style={{ cursor: "pointer" }}
            >
              High School {isHighSchoolOpen ? "▲" : "▼"}
            </h3>
            {isHighSchoolOpen && (
              <div>
                <span>SRI SAI SCHOOL</span>
                <span>2015 - 2016</span>
              </div>
            )}
          </div>
        </section>

        <section id="about" style={{ padding: "50px 0" }}>
          <h2>About</h2>
          <p>lorem100</p>
        </section>
      </div>
    </div>
  );
}
