import "../style/header.css";

import React from 'react'

const header = () => {
  return (
    <header className="header">
    <a href="#home" className="logo">Saima <span>Salar</span></a>
    <i className='bx bx-menu' id="menu-icon"></i>
<nav className="navbar">
<a href="#home" className="active" aria-label="Home">Home</a>
<a href="#project">Projects</a>
<a href="#services">Services</a>
<a href="#testimonials">Testimonials</a>
<a href="#contact">Contact</a>


</nav>
</header>
  )
}

export default header