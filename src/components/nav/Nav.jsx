import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {BiPhotoAlbum} from 'react-icons/bi'
import {BsBookmarkCheck} from 'react-icons/bs'
import {AiOutlineContacts} from 'react-icons/ai'
const nav = () => {
  return (
    <nav>
      <a href="#home"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiOutlineBook /></a>
      <a href="#gallery"><BiPhotoAlbum /></a>
      <a href="#projects"><BsBookmarkCheck /></a>
      <a href="#contact"><AiOutlineContacts /></a>
    </nav>
  )
}

export default nav