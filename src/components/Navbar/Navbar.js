import React, { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {useNavigate,Link} from "react-router-dom"
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
// import images from '../../constants/images';
import './Navbar.css';

const Navbar = ({ setCard, card,togglecards,openHome,toggleWallpaper,home,wallpaper}) => {
  // <img src='https://i.pinimg.com/564x/7a/8d/e0/7a8de0d332a01869c56e403f6463bf71.jpg' alt="app logo"/>
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState("active");
  const navigateCarpet = useNavigate();
  const navigateHome = useNavigate();
  const navigatewallpaper = useNavigate();
  const navigateabout = useNavigate();
  const navigatecontact = useNavigate();
  const smallscreennavRef = useRef(null);
  useEffect(() => {
    let handler = (event) =>{
      if (
        !smallscreennavRef ||
        !smallscreennavRef.current ||
        !smallscreennavRef.current.contains(event.target)
      ){
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown" , handler);
    return() =>{
      document.removeEventListener("mousedown",handler);
    };
  }, [])
  return (
    <nav className='app__navbar'>
    <div className='app__navbar-logo'>
    <div class="content">
    <div class="content__container">
      <p class="content__container__text">
        URBAN
      </p>
      
      <ul class="content__container__list">
        <li class="content__container__list__item">MODERN</li>
        <li class="content__container__list__item">DECOR</li>
      </ul>
    </div>
  </div>

  
    </div>
    <ul className="app__navbar-links">
   <li className=  "opensans1" onClick={() =>navigateHome("/")} >
   Home
    </li> 
   
    <li  className="opensans3"
    onClick={()=> navigateCarpet("/carpet")}>
    Carpets
    </li>
    <li className="opensans4"  onClick={() =>navigatewallpaper("/wallpaper")}>
   Wallpapers
    </li>
    <li className="opensans5" onClick={() => navigatecontact("/contact")}>
    Contact
    </li>
    <li className="opensans2" onClick={() => navigateabout("/about")}> About</li>
  </ul>
  
  <div className="app__navbar-login">
  <Link to="/signin" className="opensans" >Log In / Registration</Link>
  </div>
     
      <div className="app__navbar-smallscreen" ref={smallscreennavRef}>
      <div className='burger' style={{position:"absolute",left:"95%"}}> <GiHamburgerMenu color="#fff" fontSize={30} onClick={() => setToggleMenu(true)} /></div>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiFillCloseCircle fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            <li className="opensans1" onClick={() => {setToggleMenu(false);navigateHome("/")}}>Home</li>
            <li className="opensans3" onClick={() => {setToggleMenu(false);navigateHome("/carpet")}}>Carpets</li>
            <li className="opensans4" onClick={() => {setToggleMenu(false);navigateHome("/wallpaper")}}>Wallpapers</li>
            <li className="opensans5" onClick={() => {setToggleMenu(false);navigateHome("/contact")}}>Contact</li>
            <li className="opensans2" onClick={() => {setToggleMenu(false);navigateHome("/about")}}>About</li>
            </ul>
          </div>
        )}
      </div>
  
    </nav>
  )
}

export default Navbar