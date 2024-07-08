import React from 'react';
import style from "./Skills.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className={style.skillsContainer}>
      <h2>Let's check out my skills</h2>
      <div className={style.skillGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={style.skillCard} data-aos="slide-up" data-aos-once="false">
            <img src={require(`./Media/${skill.icon}`)} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const skillsData = [
  { name: "HTML", icon: "html3.png" },
  { name: "CSS", icon: "css.png" },
  { name: "React", icon: "React.webp" },
  { name: "JavaScript", icon: "js.png" },
  { name: "Python", icon: "opengraph-icon-200x200.png" },
  { name: "Django", icon: "django.png" },
  { name: "SQL", icon: "sql7.jpg" },
  { name: "Tailwind CSS", icon: "image.png" }
];

export default Skills;