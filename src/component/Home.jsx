import Nav from "./Nav"
import style from "./Home.module.css"
import React from 'react'

const Home = () => {

  const handleDownloadResume = () => {
  
    
    const resumeUrl = `${process.env.PUBLIC_URL}/my_resume.pdf`;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'KANNAN-J-Resume.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    const mailtoLink = `mailto:kannan3042001@gmail.com?subject=Hire Me&body=Hi Kannan, I'm interested in hiring you for a project.`;
    window.open(mailtoLink, '_blank');
  };


  return (
    
    <section className={style.homeContainer}>
    
      <div className={style.content}>
        <p className={style.line1}>HELLO ! I'm  kannan j </p>
        <p className={style.line2}>Software Engineer</p>
        <p className={style.line3}>Specialized in Frontend Development</p>
        <p className={style.line4}> I'm a software developer on a mission to harness the power of technology to drive meaningful impact. With a lifelong passion for innovation and a commitment to nurturing entrepreneurial spirit, I design and develop solutions that make a difference in people's lives.</p>
        
        <button className={style.resume} onClick={handleDownloadResume} >Check resume
         </button>
        <button className={style.hire} onClick={handleHireMe}>Hire-Me </button>
      </div>
      <div className={style.profile}>

      </div>
   
    </section>
  )
}

export default Home
