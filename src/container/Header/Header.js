import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import {TbHeartHandshake} from 'react-icons/tb'
// import {FaHandshake} from 'react-icons/fa'
import './Header.css'
import HeaderAnim from '../Anim/HeaderAnim'
import CarouselCard from '../Gallery/CarouselCard'

const Header = () => {
  
  // <div className='icon_hand'><TbHeartHandshake className='hand'/></div>
   {/*<h1 className="app__header-h1">The Key To Fine Decor</h1> */}
 {/* <HeaderAnim/>*/}



  return (
    <div className="app__header  app__wrapper section__padding" id="home">
    <img src='https://see.fontimg.com/api/renderfont4/9Y2DK/eyJyIjoiZnMiLCJoIjo4MywidyI6MTAwMCwiZnMiOjgzLCJmZ2MiOiIjRkNGQUYxIiwiYmdjIjoiI0ZBRUZFRiIsInQiOjF9/VXJiYW4gTW9kZXJuIERlY29y/nature-beauty-personal-use.png' className='heading'/> 
  <div className='header_slick'><CarouselCard/></div>
  </div>
  )
}

export default Header