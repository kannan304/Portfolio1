import React from 'react';
import style from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={style.skillsContainer}>
      <h2>Let's check out my skills</h2>
      <div className={style.skillGrid}>
        <div className={style.skillCard}>
          <img src={require("./Media/html3.png")} alt="HTML" />
          <h3>HTML</h3>
        </div>
        <div className={style.skillCard}>
          <img src={require("./Media/css.png")} alt="CSS" />
          <h3>CSS</h3>
        </div>
        <div className={style.skillCard}>
          <img src={require("./Media/React.webp")} alt="React" />
          <h3>React</h3>
        </div>
        <div className={style.skillCard}>
          <img src={require("./Media/js.png")} alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>
        <div className={style.skillCard}>
          <img src={require("./Media/opengraph-icon-200x200.png")} alt="Python" />
          <h3>Python</h3>
        </div>
        <div className={style.skillCard}>
          <img src={require("./Media/opengraph-icon-200x200.png")} alt="Django" />
          <h3>Django</h3>
        </div>
        <div className={style.skillCard}>
          <img src={require("./Media/sql7.jpg")} alt="SQL" />
          <h3>SQL</h3>
        </div>
        <div className={style.skillCard}>
          <img src={require("./Media/bootstrap.jpg")} alt="Bootstrap" />
          <h3>Bootstrap</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;