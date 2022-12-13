import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='' target="_blank"><BsLinkedin /></a>
        <a href='' target="_blank"><ImGithub /></a>
    </div>
  )
}

export default HeaderSocials