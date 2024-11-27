
import "../style/project.css";

import React from 'react'

const projects = () => {
  return (

    <section className="project " id="project">
<h2 className="heading">Projects</h2>
<div className="timeline-items">
    <div className="timeline-item">
        <div className="timeline-dot"></div>
            <div className="timeline-data"></div>
            <div className="timeline-content">
                <h3>hackathon-milestones-GIAIC-</h3>
                <p>https://hackathon-milestones-giaic.vercel.app/</p>
            </div>
        
    </div>

    <div className="timeline-item">
        <div className="timeline-dot">   </div>
            <div className="timeline-data"></div>
            <div className="timeline-content">
                <h3>ecommerce-website-next.js</h3>
                <p>https://ecommerce-website-next-js-saima-salars-projects.vercel.app/</p>
            </div>
     
    </div>

    <div className="timeline-item">
        <div className="timeline-dot">      </div>
            <div className="timeline-data"></div>
            <div className="timeline-content">
                <h3>Tic-Tac-Toe-Game-using-HTML-CSS-JavaScript</h3>
                <p>https://tic-tac-toe-game-using-html-css-java-script.vercel.app/</p>
            </div>
  
    </div>

    <div className="timeline-item">
        <div className="timeline-dot"></div>
            <div className="timeline-data"></div>
            <div className="timeline-content">
                <h3>Chrome-Extension-m3</h3>
                <p>https://chrome-extension-m3.vercel.app/</p>
            </div>
    </div>
</div>
    </section>
  )
}

export default projects