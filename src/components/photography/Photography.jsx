import React from 'react'
import './photography.css'
import Img1 from '../../assests/p1.png'
import Img2 from '../../assests/p2.png'
import Img3 from '../../assests/p3.png'
import Img4 from '../../assests/p4.png'
import Img5 from '../../assests/i10.png'
import Img6 from '../../assests/p6.png'
import Img7 from '../../assests/p7.png'
import Img8 from '../../assests/p8.png'
import Img9 from '../../assests/i11.png'
const Photography = () => {
  return (
    <section id='photography'>
    <h4>Pictures of memorable places</h4>
    <h2>PHOTOGRAPHY</h2>
    
      <div className="container gallery__container">
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img8} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img7} alt="" />
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
            <img src={Img3} alt="" />
          </div>
        </article>
        <article className='gallery__item'>
          <div className='gallery__item-image'>
            <img src={Img5} alt="" />
          </div>
        </article>
      </div>
      </section>
  )
}

export default Photography