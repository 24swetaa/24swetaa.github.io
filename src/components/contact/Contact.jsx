import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
// import { useRef } from 'react';
// import emailjs from 'emailjs-com'

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_tjl647f', 'template_919tjlo', form.current, 'DO5SESGAbe7YAW9ks')
  //    e.target.reset()
  // };
  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <a href="mailto:sweta99.ar@gmail.com">
                Send the message
              </a>
          </article>
          
        </div>
        <article className='contact__option'>
              <AiFillLinkedin className='contact__option-icon'/>
              <h4>Linkedin</h4>
              <a href="https://www.linkedin.com/in/sweta-singh-932b34206/" target='_blank'>
                Say Hi!
              </a>
          </article>
          {/* <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Name' required/>
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send</button>

          </form> */}
      </div>
    </section >
  )
}

export default Contact