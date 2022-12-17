import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {BiPhotoAlbum} from 'react-icons/bi'
import {BsBookmarkCheck} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'
import {GiAchievement} from 'react-icons/gi'
import {AiOutlineHeart} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsBookmarkCheck /></a>
      <a href="#gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' : ''}><BiPhotoAlbum /></a>
      <a href="#achievements" onClick={() => setActiveNav('#achievements')} className={activeNav === '#achievements' ? 'active' : ''}><GiAchievement /></a>
      <a href="#photography" onClick={() => setActiveNav('#photography')} className={activeNav === '#photography' ? 'active' : ''}><AiOutlineHeart /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav