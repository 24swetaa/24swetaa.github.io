import React from 'react'
import './about.css'
import Me from '../../assests/sweta3.png'

const About = () => {
  return (
    <section id = 'about'>
      <h4 >Get To Know</h4>
      <h2>ABOUT ME</h2>

      <div className="containter about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
          Hi! I'm Sweta Singh. 
          </p>
          <p>
            I am an undergraduate student at Indian Institute of Technology (BHU) Varanasi.
            Currently I am in my third year of study at the institute completing my B.Tech degree
            with major in Computer Science and Engineering.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About