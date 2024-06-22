import React, { Component, createRef } from 'react';
import { Link } from "react-router-dom"
import style from "./Nav.module.css"

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.navbarRef = createRef();
  }
  handleClick = () => {
    this.setState({ clicked:!this.state.clicked });
    this.navbarRef.current.classList.toggle(style.active);
  }

  closeMenu = () => {
    this.setState({ clicked: false });
    this.navbarRef.current.classList.remove(style.active);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.closeMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeMenu);
  }

  

  render() {
    return (
      
      <nav id={style.Nav}>
        <a href="" id={style.name}>Kannan </a>
        <div>
          <div class="overlay"></div>
          <ul ref={this.navbarRef} id={style.navbar}>

            <li><Link to="/" onClick={this.closeMenu}>Home</Link></li>
            <li><Link to="/about"  className={style.active} onClick={this.closeMenu}>About Me</Link></li>
            <li><Link to="/skill" onClick={this.closeMenu}>Skills</Link></li>
            <li><Link to="/project" onClick={this.closeMenu}>Project</Link></li>
            <li><Link to="/contact" onClick={this.closeMenu}>Contact Me</Link></li>
          </ul>
        </div>

        <div id={style.mobile}>
          <i id={style.bar} 
             className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'} 
             onClick={this.handleClick} />
        </div>
        
        
      </nav>
    );
  }
}
export default Nav