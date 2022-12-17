import React from 'react'
import './projects.css'
import Pic from '../../assests/pics.png'
import Movie from '../../assests/movie.png'
import Shop from '../../assests/shop.png'
import Monster from '../../assests/monster.png'
const Projects = () => {
  return (
    <section id='projects'>
      <h2>MY PROJECTS 🔖</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <h3>Jagriti Shop</h3>
          <h3>A cloth store management system</h3>
          <h4>SpringBoot, JDBC, MySQL, Thymeleaf</h4>
          <img src={Shop} alt="" />
          <h5>Developed a full stack online shopping website for clothes. It has the register, login, and logout feature for both user and the admin. Users can view the products
category and brand-wise and can place orders by adding them to their cart. Admin can manage employees, brands, categories and products and can update them.</h5>
          <a href='https://github.com/24swetaa/Clothes_Management_System' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <h3>Movie Matrix</h3>
          <h3>A movie recommendation system</h3>
          <h4>Python, Streamlit, Machine learning</h4>
          <img src={Movie} alt="" />
          <h5>Designed a web application which recommends 8 similar movies on the basis of a selected movie. Used content-based machine learning filtering algorithms. Fetched movie details and posters through TMDB website APIs. Implemented a chatbot which can answer queries of a user related to movie recommendations.</h5>
          <a href='https://github.com/24swetaa/Movie.Matrix' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <h3>Monster Shooting</h3>
          <h3>A game using genetic algorithm</h3>
          <h4>JavaScript, Genetic Algorithm</h4>
          <img src={Monster} alt="" />
          <h5>This game mutates the monster (difficulty level of the game) by using a genetic algorithm. Main functions are encoding the population, population generation, fitness evaluation, selection of parents,
crossover, mutation, elitism and evolution.</h5>
          <a href='https://github.com/24swetaa/monster_shooting_game' className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <h3>Pics Era</h3>
          <h3>Picture sharing web application</h3>
          <h4>Django, MySQL, HTML, CSS</h4>
          <img src={Pic} alt="" />
          <h5>Built a picture-sharing web app using Django framework, where users can upload pictures category-wise. User can also create a new category.
Used MySQL for the backend.</h5>
          <a href='https://github.com/24swetaa/picera' className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Projects