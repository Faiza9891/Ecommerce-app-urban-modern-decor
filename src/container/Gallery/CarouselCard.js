
import React, { useState } from 'react';
import './Gallery.css'
import  Slider  from 'react-slick';
import { FaBluetooth, FaChevronLeft,FaChevronRight, } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarouselCard = () => {

  const SliderData = [
    {
      imgUrl:"https://www.handscarpets.com/Content/images/traditional-4.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/traditional-2.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/traditional-3.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/traditional-1.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/transitional-1.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/transitional-2.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/transitional-4.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/contemporary-4.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/contemporary-2.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/empire-x-img1.jpg"
    },
    {
      imgUrl:"https://www.handscarpets.com/Content/images/Nur-Sultan.jpg"
    },
    {
      imgUrl:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Hawaiian-Safari-N-2-1609909707702.jpg"
    },
    {
      imgUrl:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Blissful-Radha-Krishna-N-2-1650304493009.jpg"
    },
    {
      imgUrl:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Moroccan-Architecture-0-1604126740642.jpg"
    },
    {
      imgUrl:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Exotic-Flowers-N-2-1609907733723.jpg"
    },
    {
      imgUrl:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Abstract-Golden-Veins-N-2-1608100980779.jpg"
    },

  ];
  

  const NextArrow = ({onClick}) => {
    return (
      <div className='arrow'>
      <FaChevronRight onClick={onClick} />
      </div>
     
      
    )
  }
  const PrevArrow = ({onClick,style}) => {
    return (
      <FaChevronLeft  onClick={onClick }
      className="arrow"
      />
      
    )
  }


  // <div className={index === dataIndex ? "slide active" : "slide"}>
  // <img src={slide.image} alt='image' className='image' />
  // </div>

  const [dataIndex, setDataIndex] = useState(0)
const small = window.matchMedia("(max-width: 650px)");
const settings = {
isFinite: true,
speed: 500,
slidesToScroll: 2,
slidesToShow: 2,
centerMode: true,
autoplay:true,
autoplaySpeed:1000,
cssEase:"linear",
centerPadding: '50px',
arrow:"20",
nextslide:<NextArrow/>,
prevslide:<PrevArrow/>,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
],

beforeChange: (current, next) => setDataIndex(next)
}

if (small.matches){
settings.slidesToShow = 2

}


  return (
    <section className='slider_sec'>
   
    <Slider {...settings}>
    {SliderData.map((slide,index) => {
      return (

        <div key={index} className={index === dataIndex ? "slide active" : "slide"}>
        <div className='sec'>
        <img src={slide.imgUrl}/>
</div>
       
      </div>


      )
    })}
    </Slider>

{/*

      <FaArrowAltCircleLeft
      fontSize='45px'
      backgroundColor="transparent"
       color="gold"
      className='left-arrow' onClick={prevSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight  
      fontSize='45px'
     backgroundColor="transparent"
      color="gold"
    className='right-arrow' onClick={nextSlide} />*/}
     
    </section>
  );
};

export default CarouselCard;



