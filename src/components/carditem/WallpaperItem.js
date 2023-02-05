import React,{useState} from 'react' 
import  Slider  from 'react-slick';
import Navbar from '../Navbar/Navbar';
import './CardItem.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';






const WallpaperItem = () => {
  const notifyme = () =>toast.warn("Please login!");
  const clearWaitingQueue = () => {
    // Easy, right 😎
    toast.clearWaitingQueue();
  }

  const wallData = [
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/Elegant-Sculpture-of-Horses-1-1529068345922.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Bronze-Aquarium-1-1529068378957.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/category/trees-71.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/category/abstract-18.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Serene-Lotus-N-2-1618118746081.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Fluid-Art-N-2-1604128243749.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Hawaiian-Safari-N-2-1609909707702.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Blissful-Radha-Krishna-N-2-1650304493009.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Moroccan-Architecture-0-1604126740642.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Exotic-Flowers-N-2-1609907733723.jpg"
    },
    {
      img:"https://www.wallskin.in/static/www/images/productImages/274x301/The-Abstract-Golden-Veins-N-2-1608100980779.jpg"
    },
   
  ]
  
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
  // nextslide:<NextArrow/>,
  // prevslide:<PrevArrow/>,
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
  
const wallpaperData = [
    {
        imgUrl:"https://m.media-amazon.com/images/I/51shTSJ-1dL._AC_UF320,320_SR320,320_.jpg",
        description:"Peijinsart 3D Wallpaper for Walls Living Room Bedroom Ceilings | Self Adhesive Wall Stickers / DIY Decorative Wall Paper ( 70 CM X 70 CM )( White Flower )",
        rating:"",
        price:"188",
        offer:"FREE delivery",
        stock:"In stock."

    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/71GtZzQb30L._SX522_.jpg",
        description:"Wolpin Wall Stickers DIY Botanical Wallpaper Decal 3D Brick Self Adhesive House Office Decorative PVC Vinyl, Living Room, Hall Kitchen Shelf Liner Contact Paper Interior, Smokin Red",
        rating:"",
        price:"199",
        offer:"FREE delivery",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/71DNcHUeT8L._SX522_.jpg",
        description:"Wolpin Wall Stickers DIY Botanical Wallpaper Decal 3D Brick Self Adhesive House Office Decorative PVC Vinyl, Living Room, Hall Kitchen Shelf Liner Contact Paper Interior, Smokin Red",
        rating:"",
        price:"239",
        offer:"FREE delivery",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/715TNrGzyMS._SY355_.jpg",
        description:"FOKRIM Black Marble Self Adhesive Wall Stickers Oil-Proof Waterproof Peel & Stick Contact Wallpaper for Kitchen Living Room Office Table Home Decor Furniture Workshop (200CM X 60CM)",
        rating:"",
        price:"287",
        offer:"FREE delivery on first two orders.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/91yosWXg8XL._AC_UL320_.jpg",
        description:"Wolpin Wall Stickers DIY Wallpaper (45 x 500 cm) Black Damask Luxury Self Adhesive Decals Living Room Bedroom Decoration, Black",
        rating:"",
        price:"199",
        offer:"FREE delivery on first order.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/9120YCEgNwL._AC_UL320_.jpg",
        description:"Wolpin Wall Stickers DIY Wallpaper (45 x 500 cm) Floral Damask Self Adhesive, Living Room, Bedroom, Sofa Background Decal, Mustard Yellow",
        rating:"",
        price:"199",
        offer:"FREE delivery",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/81lq8WazW6L._AC_UL320_.jpg",
        description:"Decor Production Self Adhesive Wallpaper (3x4 Feet, Pattern 10)",
        rating:"",
        price:"499",
        offer:"FREE delivery",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/91dxUvmB49L._AC_UL320_.jpg",
        description:"ANNA CREATIONS Self Adhesive Wallpaper Waterproof Vinyl Stickers Wooden Door Wardrobe Desktop PVC Wall Papers -18'x 120'' inch (Green Cherry)",
        rating:"",
        price:"275",
        offer:"FREE delivery on first order.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/812RYMLG5fL._AC_UL320_.jpg",
        description:"PRINTELLIGENT Waterproof Vinyl Self Adhesive Wallpaper, 16 x 170 Inch",
        rating:"",
        price:"2395",
        offer:"FREE delivery.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/91AQldZzDuL._AC_UL320_.jpg",
        description:"PRINTELLIGENT Vinyl Self-Adhesive Wallpaper, 27 sq. ft.",
        rating:"",
        price:"1,199",
        offer:"FREE delivery.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/716MtDvC9OL._AC_UL320_.jpg",
        description:"JAAMSO ROYALS Vinyl Peel and Stick, Self Adhesive Brick Stone Wallpaper, 9.68 Sq. ft",
        rating:"",
        price:"269",
        offer:"FREE delivery.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/51kOiFa8KhL._AC_UF320,320_SR320,320_.jpg",
        description:"INTERIOR DESIGN 3D Wallpaper Wall Stickers /Polyvinyl Stickers Self-Adhesive DIY Wallpaper for Home Hotel Living Room Bedroom Cafe Décor (3 x 4 feet , Design_49)",
        rating:"",
        price:"539",
        offer:"FREE delivery.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/719NVreqpHL._SX355_.jpg",
        description:" INTERIOR DESIGN 3D Wallpaper Wall Stickers /Polyvinyl Stickers Self-Adhesive DIY Wallpaper for Home Hotel Living Room Bedroom Cafe Décor (3 x 4 feet , Design_56)",
        rating:"",
        price:"584",
        offer:"FREE delivery.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/81bmDTuT9nL._SX355_.jpg",
        description:"UK INTERIOR DESIGN 3D Wallpaper Wall Stickers /Polyvinyl Stickers Self-Adhesive DIY Wallpaper for Home Hotel Living Room Bedroom Cafe Décor (4 x 6 feet , Design_13)",
        rating:"",
        price:"1,439",
        offer:"FREE delivery.",
        stock:"In stock."
    
      },
      {
        imgUrl:"https://m.media-amazon.com/images/I/513S3OtE8eL._SY300_SX300_QL70_FMwebp_.jpg",
        description:"UK INTERIOR DESIGN 3D Wallpaper Wall Stickers /Polyvinyl Stickers Self-Adhesive DIY Wallpaper for Home Hotel Living Room Bedroom Cafe Décor (3 x 4 feet , Design_57)",
        rating:"",
        price:"584",
        offer:"FREE delivery on first order.",
        stock:"In stock."
    
      },
]

  // useEffect = (() => {
  //   setLoader(true);
  //   setTimeout = (() =>{
  //     setLoader(false);
  //   },1000);
  // },[]);

  return (
    <div className='carpet'>
    <ToastContainer
    autoClose={1000}
    position="top-center"
    limit={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
    />
       <div>
   <Navbar/>
    <div className='card_item_card'>
<img src='https://see.fontimg.com/api/renderfont4/OV9ee/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/V2FsbHBhcGVycw/lucy-said-ok-personal-use-italic.png' className="wallpaper_head"/>
   <div className='carpet_sec'>
   <section className='slider_sec'>

   <Slider {...settings}>
   {wallData.map((slide,index) => {
     return (

       <div key={index} className={index === dataIndex ? "slide active" : "slide"}>
       <div className='sec'>
       <img src={slide.img}/>
</div>
      
     </div>


     )
   })}
   </Slider>
   </section>
   <div className='slider_content'>Discover the widest range of unique wallpapers, also customize your own designs and buy them online. Get free home delivery anywhere in India.

   Our versatility is showcased in our remarkable collection of exquisite Wall Décor. Abstract, glamorous, vintage or romantic we have a dish for every taste. We use a scientific approach to bring out the best mood through our wall décor collections. </div>
   </div>
   <div className='cards'>
   
    {wallpaperData.map((e,index) =>{
        return(
                  <div className='card_item'>
                  <img src={e.imgUrl}/>
                  <h1 style={{margin:"1rem",color:"white"}}> PRICE - ₹{e.price}</h1>
                  <div className='card_content'>
                  <h3 style={{margin:"1rem",color:"black"}}> {e.description}</h3>
                  <h4 style={{color:"white",marginTop:"2rem"}} >{e.stock}</h4>
                  <div className='offer'  style={{color:"black"}}>{e.offer}</div>
                  <div>
                  <button className='cart_btn' onClick={notifyme}>ADD TO CART</button>

                  </div>
                 </div>
  </div>
 


            
)
  
    })}
    </div>
    </div>
    </div>)
    </div>
  );
}
  

export default WallpaperItem