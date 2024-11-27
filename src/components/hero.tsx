import React from 'react'
import "../style/hero.css";
import Image from 'next/image'

const hero = () => {
  return (

    <section className="home" id="home">
    <div className="home-content">
    <h1>Hi, It's <span>Saima</span></h1>
    <h3 className="text-animation">I am a <span></span>
    </h3>
    <p>I build modern, responsive websites and applications that help businesses grow. With expertise in both front-end and back-end technologies, I ensure a smooth and effective digital experience. </p>
    <div className="social-icons">
    <a href="#" aria-label="LinkedIn Profile"><i className='bx bxl-linkedin'>
    </i></a>
    <a href="#" aria-label="GitHub Profile"><i className='bx bxl-github'></i></a>
    <a href="#"><i className='bx bxl-instagram'></i></a>
    <a href="#"><i className='bx bxl-twitter'></i></a>
    </div>
    <div className="btn-group">
        <a href="#" className="btn">Hire</a>
        <a href="#contact" className="btn">Contact</a>
    </div>
    </div>
    <div className="home-img">
    <Image src="/images/image.jpg" alt="Portrait of Saima Salar" width={250} height={250} />
    </div>
    
        </section>
    
  )
}

export default hero