"use client";

import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const skills = [
    {
      title: "TECHNICAL SKILLS",
      content:
        "HTML, CSS, SCSS/SASS, Javascript, ReactJs, Material UI, Git, Blockchain, Web3.js, Solidity, Hardhat, and Truffle.",
    },
    {
      title: "SOFT SKILLS",
      content:
        "Googling skills to help solve technical problems, Ability to work remotely, Art of reading and understanding Documentation, Ability to communicate and collaborate well with team members, Teamwork and Decision Making",
    },
  ];

  const experience = [
    "July 2021 - December, 2021: Frontend Developer Intern at Health Information System.",
    "April 2021 - March 2022: Software Developer Fellow at Women Techsters Fellowship",
    "January 2022 - April 2022: Blockchain Developer at Web3bridge",
  ];

  const education = [
    "April 2017 - August 2023: BSc Computer Science with Mathematics, Obafemi Awolowo University",
  ];

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about-container bd-grid">
        {["Skills", "Experience", "Education"].map((title, index) => (
          <div
            key={index}
            className={`tab-contents ${
              activeTab === title.toLowerCase() ? "active-tab" : ""
            }`}
            id={title.toLowerCase()}
          >
            <ul>
              {title === "Skills" &&
                skills.map((item, i) => (
                  <li key={i}>
                    <span>{item.title}</span>
                    <br />
                    {item.content}
                  </li>
                ))}
              {title === "Experience" &&
                experience.map((item, i) => (
                  <li key={i}>
                    <span>{item}</span>
                    <br />
                  </li>
                ))}
              {title === "Education" &&
                education.map((item, i) => (
                  <li key={i}>
                    <span>{item}</span>
                    <br />
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
