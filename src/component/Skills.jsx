import React, { useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import style from "./Skills.module.css"
import { FaHtml5, FaCss3, FaJs, FaReact,FaPython, FaCode } from 'react-icons/fa';
import { DiVisualstudio, DiPython } from 'react-icons/di';
import { FaDatabase } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const skills = [
  {
    id: 1,
    title: "styling and markup",
    elements: [
      { text: "HTML", icon: FaHtml5 },
      { text: "CSS", icon: FaCss3 },
      { text: "tailwindcss", icon: FaCss3 }
      
    ]
  },
  {
    id: 2,
    title: "programming",
    elements: [
      { text: "JS", icon: FaJs },
      { text: "React", icon: FaReact },
      { text: "python", icon: FaPython }
      
    ]
  },
  {
    id: 3,
    title: "Developement Tool",
    elements: [
      { text: "github", icon:  FaGithub},
      { text: "VS Code", icon: DiVisualstudio },
      { text: "PyCharm", icon: FaCode }
    ]
  },
  {
    id: 4,
    title: "database",
    elements: [
      { text: "sql", icon: FaDatabase },
      
    ]
  },
];



const Skills = () => {
  const [hover, setHover] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleMouseEnter = (skill) => {
    setHover(true);
    setSelectedSkill(skill);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className={style.container} data-aos="fade-up" data-aos-once="false">
      <h2>Let's checkout my skills</h2>
      <section>
        {skills.map((skill) => (
          <div key={skill.id} className={style.contentSkill} data-aos="fade-up" data-aos-once="false">
            <div className={style.imageHover} onMouseEnter={() => handleMouseEnter(skill)} onMouseLeave={handleMouseLeave}>
              <p className={style.hoverContent}>{skill.title}</p>
              {hover && selectedSkill === skill && (
                <div
                  className={style.hoverText}
                  style={{
                    background:"radial-gradient(#ffe6d9, #ffffff)",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <ol >
                    {skill.elements.map((element, index) => (
                      <li key={index}>
                        {element.icon && <element.icon size={20} style={{ marginRight: 10 }} />}
                        {element.text}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;