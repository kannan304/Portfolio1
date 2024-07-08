
import React, { useEffect } from 'react';
import style from "./About.module.css";
import Aos from "aos"
import "aos/dist/aos.css"

const Aboutme = () => {

  useEffect (()=>{
    Aos.init({
      duration: 1000,
      once:true
    })
  },[])
 
return (
    <div className={style.aboutContainer}>
        <h2 className={style.title} data-aos="fade-up" data-aos-offset="0" data-aos-once="false">My Education Journey :</h2>

        <div className={style.contentBox} data-aos="fade-up" data-aos-offset="0" data-aos-once="false" >
          <div className={style.class}>
              <p className={style.head1}>ug Degree <br/> <span>2019-2023</span></p>
              
          </div>
          <div className={style.vl}>

          </div>
          <div className={style.detail}>
              <p className={style.line1}>information technology</p>
              <p className={style.line2}>Ponjesly College of Engineering Nagercoil</p>
              <p className={style.line2}>Anna university | 7.9 </p>
          </div>
        </div>
        <div className={style.contentBox} data-aos="fade-up" data-aos-offset="0"  data-aos-once="false" >
            <div className={style.class}>
              <p className={style.head1} >HSC <br/><span>2017-2019</span></p>
              
          </div>
             <div className={style.vl}>

          </div>
          <div className={style.detail}>
              <p className={style.line1}>higher secondary</p>
              <p className={style.line2}>CS from Pulliman Higher Secondary School</p>
              <p className={style.line2}>State Board of Tamil Nadu | 70% </p>
          </div>
        </div>
        <div className={style.contentBox} data-aos="fade-up" data-aos-offset="0"  data-aos-once="false">
            <div className={style.class}>
              <p className={style.head1}>sslc <br /><span>2016-2017</span></p>
              <p className={style.head2}></p>
          </div>
             <div className={style.vl}>

          </div>
          <div className={style.detail}>
          <p className={style.line1}>lower secondary</p>
              <p  className={style.line2}>Pulliman Higher Secondary School</p>
              <p  className={style.line2}>State Board of Tamil Nadu | 93% </p>
          </div>
        </div>

    </div>
  )
}
export default Aboutme;