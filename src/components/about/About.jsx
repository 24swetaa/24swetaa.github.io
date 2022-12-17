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
          <h3><div className='quotes'>
          Hi! I'm Sweta Singh.
          </div>
          </h3>
          <p>
            I am a third year undergraduate student of the department of Computer Science and Engineering, Indian Institute of Technology (BHU) Varanasi, India. I was born in Ranchi, Jharkhand.
            I like watching series and documentaries (especially of the thriller genre) and listening to stories. My usual way of going about everything in life is: <div className='quotes'><i>"Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth."</i></div>
          </p>
          {/* <a href='#contact' className='btn btn-primary' >Let's Talk</a> */}
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    </section>
  )
}

export default About