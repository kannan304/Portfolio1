
import React, { useState } from 'react';
import style from "./About.module.css";

const Aboutme = () => {
 
return (
    <div className={style.aboutContainer}>
        <h2 className={style.title}>My Education Journey :</h2>

        <div className={style.contentBox}>
          <div className={style.class}>
              <p className={style.head1}>Pg Degree <br/> <span>2019-2023</span></p>
              
          </div>
          <div className={style.vl}>

          </div>
          <div className={style.detail}>
              <p className={style.line1}>Bachelor of technology</p>
              <p className={style.line2}>IT from Ponjesly Collage of Engineering Nagercoil</p>
              <p className={style.line2}>Anna university | 7.9 </p>
          </div>
        </div>
        <div className={style.contentBox}>
            <div className={style.class}>
              <p className={style.head1} >Intermediate <br/><span>2017-2019</span></p>
              
          </div>
             <div className={style.vl}>

          </div>
          <div className={style.detail}>
              <p className={style.line1}>higher seconadary</p>
              <p className={style.line2}>CS from Pulliman Higher Secondary School</p>
              <p className={style.line2}>State Board of Tamil Nadu | 70% </p>
          </div>
        </div>
        <div className={style.contentBox}>
            <div className={style.class}>
              <p className={style.head1}>sslc <br /><span>2016-2017</span></p>
              <p className={style.head2}></p>
          </div>
             <div className={style.vl}>

          </div>
          <div className={style.detail}>
          <p className={style.line1}>lower seconadary</p>
              <p  className={style.line2}>Pulliman Higher Secondary School</p>
              <p  className={style.line2}>State Board of Tamil Nadu | 93% </p>
          </div>
        </div>

    </div>
  )
}
export default Aboutme;