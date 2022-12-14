import React from 'react'
import './experience.css'
import {BsFillStarFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h2>SKILLS</h2>

      <div className="container experience__container">
        <div className="expereince__languages">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <h4>C/C++</h4>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>

              <div>
              <h4>Python</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>Linux</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>Kotlin</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="expereince__tools">
          <h3>Tools & Frameworks</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>Git</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>Android Studio</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>Django</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>SpringBoot</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>ReactJS</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillStarFill className='experience_details-icon'/>
              <div>
              <h4>Streamlit</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default experience