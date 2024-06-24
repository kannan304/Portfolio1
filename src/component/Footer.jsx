

import React from 'react';
import style from './footer.module.css'
import { FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <span>Find Me on : </span>
        <a href="https://wa.me/9344820853" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://github.com/kannan304" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/__kannan.j__?igsh=MWtmazh2bDFoZGNscw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className={style.copyright}>
        <p>© {new Date().getFullYear()} Kannan J. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;