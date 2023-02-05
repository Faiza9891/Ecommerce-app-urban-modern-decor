import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './SpecialMenu.css'

const SpecialMenu = () => {
  return (
    <>
    <div className="app__contact contact_bg flex__center section__padding" id="menu">
    <Navbar/>
    <div className='contact_bg'>
    <img src='https://www.saraswatiglobal.com/assets/images/about/Luxury-Rugs-Store-in-Delhi.jpg' alt='contac'/>
    </div>
    <div className='contact_content'> <h2> Contact Us</h2>
    <h3>Fine handcrafted carpets since 1881. Explore the exclusive collection of best rugs at Ansar Carpets Store Delhi- designed to stir emotion, brought to life unlike any other.
    The hand knotted carpet, woven inch by inch. And the hand tufted carpet, crafted with care and technique.
    </h3>
    <div className='contact_details'>
    <h1>ANSAR CARPETS AND RUGS DELHI | ANSAR CARPET STORE</h1>
    <p>Phone: +91 9891611793. +91 6386813406
    </p>
    <p></p>
   
    <p>22/A,Malviya Nagar Saket Road,New Delhi-110017,India</p>
    
    <p>For sales and general business enquiries, please write to us on urbanmodern@decor-carpets.com
    </p>
    </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default SpecialMenu