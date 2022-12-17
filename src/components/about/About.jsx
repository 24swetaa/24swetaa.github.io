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
          <p><div className='quotes'>
          Hi! I'm Sweta Singh.
          </div>
          </p>
          <p>
            I am a third year undergraduate student of the department of Computer Science and Engineering, Indian Institute of Technology (BHU) Varanasi, India. I was born in Ranchi, Jharkhand.
            I like watching series and documentaries (especially of the thriller genre) and listening to stories. My usual way of going about everything in life is: <div className='quotes'><i>"Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth."</i></div>
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    </section>
  )
}

export default About