import React from 'react'
import './header.css'
// import Cta from './Cta'
import me from '../../assests/swetu2.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3 className='text-light'><i>Hello I'm</i> 🙋🏻‍♀️</h3>
        <h1>SWETA SINGH</h1>
        <h4 className="text-light"><i>CSE Undergraduate</i></h4>
        {/* <Cta /> */}
        <HeaderSocials />
        <div className='me'>
          <img src = {me} alt="" />
        </div>

        {/* <a href='#contact' className='scroll__down'>
            Scroll Down
        </a> */}
      </div>
    </header>
  )
}

export default header