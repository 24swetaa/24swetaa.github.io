import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id = 'about'>
      <h4 ><i>Get To Know</i></h4>
      <h2>ABOUT ME 👩🏻‍💻</h2>
      <div className="containter about__container">
        <div className="about__me">
        
        </div>
        <div className="about__content">
          <p>
        <span className='quotes'>Hi, I'm Sweta,</span> pursuing B.Tech in Computer Science and Engineering from IIT (BHU) Varanasi.
An enthusiastic student with a strong affinity for the field of technology, data structures and algorithms, full stack development and machine learning. I have recently done projects in ReactJs, Django, Streamlit, SpringBoot, and Android Studio.
I am passionate about building some interesting applications that will influence the real world for a good cause. I enjoy the time when I am creating any application. This helps me get comfortable with new technologies, databases, and how to handle bugs.
I am interested in working in this field because it is full of challenges, and I will get to learn many skills in this ever-growing tech industry. In today's world, the demand for technology is high and I will be excited to contribute to this field. 

          </p>
          <p><span className='quotes'><i>Would love to interact further!</i></span></p>
          {/* <a href='#contact' className='btn btn-primary' >Let's Talk</a> */}
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    </section>
  )
}

export default About