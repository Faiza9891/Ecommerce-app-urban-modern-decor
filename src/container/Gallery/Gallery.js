import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {


  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">Make Your House A Home<FaHome className='fa_home' color='black'/></h1>
        <p className="p__opensans" style={{ marginTop: '2rem' ,fontSize:"25px",color:"black",fontFamily:"cursive"}}>We make it as easy as possible for you to get the wallpapers or carpets that you want fitted at an affordable price!</p>
      </div>


     {/* <div className="app__gallery-images">
       
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>*/}
    </div>
  );
};

export default Gallery