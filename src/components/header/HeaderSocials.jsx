import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sweta-singh-932b34206/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/24swetaa' target="_blank"><ImGithub /></a>
    </div>
  )
}

export default HeaderSocials