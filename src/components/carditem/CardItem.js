import React,{useState,useEffect} from 'react'
import './CardItem.css'
import Navbar from '../Navbar/Navbar';
import  Slider  from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CardItem = () => {
  const notify = () => toast.warn("Please login!");
  const clearWaitingQueue = () => {
    // Easy, right 😎
    toast.clearWaitingQueue();
  }
 

 

const slideData = [
  {
    imgUrl:"https://www.handscarpets.com/Content/images/contemporary-4.jpg"
  },
  {
    imgUrl:"https://www.handscarpets.com/Content/images/transitional-4.jpg"
  },
  {
    imgUrl:"https://www.handscarpets.com/Content/images/transitional-3.jpg"
  },
  {
    imgUrl:"https://www.handscarpets.com/Content/images/empire-x-img1.jpg"
  },
  {
    imgUrl:"https://www.handscarpets.com/Content/images/installation.jpg"
  },
  {
    imgUrl:"https://www.handscarpets.com/Content/images/creation.jpg"
  },
  {
    imgUrl:"https://www.handscarpets.com/Content/images/development.jpg"
  },
  {
    imgUrl:"https://www.handscarpets.com/Content/images/transitional-1.jpg"
  },
  // {
  //   imgUrl:"https://www.handscarpets.com/collection/graphx-carpets-rugs"
  // },
]

const [dataIndex, setDataIndex] = useState(0);
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

    const carpet =[
        {
          imgUrl:"https://m.media-amazon.com/images/I/71gBpO505HL._AC_UL320_.jpg",
          description:"DECORDEC Antique Green & Grey Persian Rug Tibetan Handmade Grey & Green Persian Area Rug Made of 100% Wool & Rayon is a Hand Knotted of Wool & Rayon (HK07)",
          rating:"3.5",
          price:"7200",
          offer:"FREE delivery",
          stock:"Only 1 left in stock."
      
        },
        {
          imgUrl:"https://m.media-amazon.com/images/I/71pDPlYHKNL._AC_UL320_.jpg",
          description:"Brand Regal Carpet Plain Collection Handwoven Luxuriant Fluffy Microfiber Shaggy Carpets, 3 X 5 Feet, Plain Base",
          rating:"4",
          price:"2099",
          offer:"FREE delivery February 8 - 9.",
          stock:"Usually dispatched in 3 to 4 days."
      
        },
        {
          imgUrl:"https://m.media-amazon.com/images/I/71oURrAUYQS._AC_UL320_.jpg",
          description:"Handwoven Plain shag Collection Super Soft Microfiber Silk Touch Rugs with 2 inch Pile Height. Size 5x8 feet Silver Ivory Multi",
          rating:"5",
          price:"7999",
          offer:"FREE delivery February 6 - 7",
          stock:"In stock."
        },
        {
          imgUrl:"https://m.media-amazon.com/images/I/81AxcuW-r9L._AC_UL320_.jpg",
          description:"Designer Superfine Cotton Bed Cover Carpet | Rug | Living Room | Bedroom | Hall | School | Temple | Bedside Runner (Red, 5x7)",
          rating:"3",
          price:"495",
          offer:"FREE delievery Saturday,28 january",
          stock:"In stock"
      
        },
        {
          imgUrl:"https://m.media-amazon.com/images/I/8198LuJbecL._AC_UL320_.jpg",
          description:"Status 5 x 7 Feet Multi Printed Vintage Persian Carpet Rug Runner for Bedroom/Living Area/Home with Anti Slip Backing",
          rating:"5",
          price:"1909",
          offer:"FREE delievery Saturday,28 january",
          stock:"In stock"
      
        },
        {
          imgUrl:"https://images-eu.ssl-images-amazon.com/images/I/71SsshpOebL._AC_UL160_SR160,160_.jpg",
          description:"spinrific Cotton Chindi Braided Floor Rug Boho Bedside Living Room Carpet Rug, Multi-Coloured, Pack of 1",
          rating:"3",
          price:"299",
          offer:"FREE delievery Saturday,28 january.",
          stock:"In stock"
      
        },
        {
          imgUrl:"https://m.media-amazon.com/images/I/81iwv8xcrOL._SX355_.jpg",
          description:"CARPET New Kashmiri Silk Carpet for Living Room 5 X 7 Feet (150x210 cm) Multi",
          rating:"",
          price:"9,441",
          offer:"FREE delivery",
          stock:"In stock"
      
        },
        {
          imgUrl:"https://m.media-amazon.com/images/I/91PRI-2GYuL._AC_UL320_.jpg",
          description:"DORNIER RUGS Kashmiri, Persian Traditional Silk Velvet Touch Carpet with Anti Slip Backing for Home Bedroom Living Room and Hall 5 Feet by 7 Feet (150x210 cm) Color-Multi",
          rating:"",
          price:"3,299",
          offer:"FREE delivery.",
          stock:"In stock"
      
        },
        {
          imgUrl:"https://m.media-amazon.com/images/I/91jJv4mPylL._AC_UL320_.jpg",
          description:"Regal Carpet Kashmiri Silk Carpet for Living Room 5 X 7 Feet (150x210 cm) Black Multi",
          rating:"",
          price:"2,699",
          offer:"FREE delivery.",
          stock:"In stock"
      
        },
        {
          imgUrl:"https://m.media-amazon.com/images/I/A1r9hW48f5L._AC_UL320_.jpg",
          description:"Sweet Homes Super Ultra Soft Shaggy Handcrafted Anti-Skid Silk Touch Carpet. Size 5X7 Feet, Colour, B6 Blue/Ivoryy.",
          rating:"",
          price:"6,499",
          offer:"FREE delivery.",
          stock:"In stock"
      
        }
      ]



      return(
        <div className='carpet'>
        <Navbar/>
        <div className='card_item_card'>
        <ToastContainer
        className="foo"
   autoClose={1000}
   position="top-center"
   limit={0}
   theme='light'
   />
       <div className='carpet_sec'>
       <img src='https://see.fontimg.com/api/renderfont4/OV9ee/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Y2FycGV0cw/lucy-said-ok-personal-use-italic.png' style={{height:"89px"}}/>
       <section className='slider_sec'>
   
       <Slider {...settings}>
       {slideData.map((slide,index) => {
         return (
   
           <div key={index} className={index === dataIndex ? "slide active" : "slide"}>
           <div className='sec'>
           <img src={slide.imgUrl}/>
   </div>
          
         </div>
   
   
         )
       })}
       </Slider>
       </section>
       <div className='slider_content'>carpet designs
       that are current and modern,
       reflecting new and diverse
       thematic, stylistic and colour
       orientation. The contemporary
       rugs reflect geometrics,
       organics, abstract art, pop art,
       from the minimal to the bold and
       vibrant. The geometric carpets
       with fascinating patterns make
       for a refreshing addition to your
       home décor.</div>
       </div>
       <div className='cards'>
        {carpet.map((e,index) =>{
            return(
             
                      <div className='card_item'>
      <img src={e.imgUrl}/>
      <h1 style={{margin:"1rem",color:"white",fontFamily:"cursive"}}> PRICE - ₹{e.price}</h1>
      <div className='card_content'>
      <h3 style={{margin:"1rem",color:"black"}}> {e.description}</h3>
      <h4 style={{color:"black",marginTop:"2rem"}} >{e.stock}</h4>
      <div className='offer'  style={{color:"black"}}>{e.offer}</div>
      <div>
   <button className='cart_btn' onClick={notify}>ADD TO CART</button>
    
      </div>
     </div>
      </div>
    
     


                
)
      
        })}  </div>
        </div>
        </div>
      );
    }


  

export default CardItem