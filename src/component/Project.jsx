import React from 'react';
import style from "./Project.module.css";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const projects = [
  {
    id: 1,
    name: "Find Coder",
    screenshot: require("./Media/p1.png"),
    description: "Tech Used : Html, Css , React"
  },
  {
    id: 2,
    name: "Empolyee Management System",
    screenshot: require("./Media/p2.png"),
    description: "Responsive website using React js"
  },
  {
    id: 3,
    name: "Clone Website - Qspiders",
    screenshot: require("./Media/p3.png"),
    description: "Tech Used : Html, Css , Java script"
  }
];

const Project = () => {

  useEffect (()=>{
    Aos.init({
      duration: 1000,
      once:true
    })
  },[])

  return (
    <div className={style.projectContainer} >
      {projects.map((project) => (
        <div key={project.id} className={style.projectCard} data-aos="slide-up" data-aos-once="false" >
          <img src={project.screenshot} alt={project.name} className={style.screenshot} />
          <h3 className={style.projectName}>{project.name}</h3>
          <p className={style.projectDescription}>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;