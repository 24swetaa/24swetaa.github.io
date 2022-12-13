import React from 'react'
import CV from '../../assests/Sweta_Singh_Resume_adob.pdf'

const cta = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>    
    </div>
  )
}

export default cta