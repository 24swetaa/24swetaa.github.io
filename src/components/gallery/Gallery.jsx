import React from 'react'
import './gallery.css'
import Img1 from '../../assests/i1.png'
import Img2 from '../../assests/i2.png'
import Img3 from '../../assests/i3.png'
import Img4 from '../../assests/i4.png'
import Img5 from '../../assests/i5.png'
import Img6 from '../../assests/i6.png'
import Img7 from '../../assests/i7.png'
import Img8 from '../../assests/i8.png'
import Img9 from '../../assests/i9.png'
const Gallery = () => {
  return (
    <section id='gallery'>
      <h2>MY ART WORK</h2>
      <div className="container gallery__container">
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img8} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img3} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img4} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img9} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img1} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img6} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img2} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img7} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img5} alt="" />
          </div>
        </article>
      </div>
    </section >
  )
}

export default Gallery