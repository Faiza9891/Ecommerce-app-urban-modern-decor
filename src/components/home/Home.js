import React,{useState} from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Header from '../../container/Header/Header'
import Gallery from '../../container/Gallery/Gallery'
import Intro from '../../container/Intro/Intro'
const Home = ({home}) => {
 
  return (
    <div >
    <div className='home'>
    <Navbar/>
    <Header/>
    <Gallery/>
    <Intro/>
    </div> 
    </div>
  )
}

export default Home