import React from 'react';
import style from "./Project.module.css";

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
  return (
    <div className={style.projectContainer}>
      {projects.map((project) => (
        <div key={project.id} className={style.projectCard}>
          <img src={project.screenshot} alt={project.name} className={style.screenshot} />
          <h3 className={style.projectName}>{project.name}</h3>
          <p className={style.projectDescription}>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;