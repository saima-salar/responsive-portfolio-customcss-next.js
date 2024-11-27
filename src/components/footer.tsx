import React from 'react'
import "../style/footer.css";
const footer = () => {
  return (
    <footer className="footer">
    <div className="social">
        <a href="#"><i className='bx bxl-linkedin'>
        </i></a>
        <a href="#"><i className='bx bxl-github'></i></a>
        <a href="#"><i className='bx bxl-instagram'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
    </div>
    <ul className="list">
        <li>
            <a href="#">FAQ</a>
        </li>
        <li>
            <a href="#services">Services</a>
        </li>
        <li>
            <a href="#">About Me</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
        <li>
            <a href="#testimonials">Testimonials</a>
        </li>
    </ul>
    <p className="copyright">© Saima Salar | All Rights Reserved</p>
    
        </footer>
    
  )
}

export default footer