import Nav from "./Nav"
import style from "./Home.module.css"
import React from 'react'

const Home = () => {
  return (
    
    <section>
    <div  className={style.welcome} >
      <div id={style.content}>
        <p className={style.line1}>The Only Platform To</p>
        <p className={style.line2}>Use free DataBase for Pratice</p>
        <p className={style.line3}>Welcome to our Employee Management System! With our system, you can easily perform CRUD (Create, Read, Update, Delete) operations on a database of employees.<br/></p>
        <button className={style.Button1}>CONTACT US</button>
        <button className={style.Button2}><i class="fa-regular fa-message"></i> FeedBack</button>
      </div>
      <div id={style.img} >
    
      </div>
    </div>
   
    </section>
  )
}

export default Home
