import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  // <img src="https://media.istockphoto.com/id/1315800229/vector/abstract-futuristic-background-with-hexagons-dark-sci-fi-hi-tech-wallpaper-with-red-lights.jpg?s=612x612&w=0&k=20&c=-Da69_kuP3MDcra60G5P024aOQ59RxeJ0Qdjw1uVXmw=" alt="G_overlay" />
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
     
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src="https://m.media-amazon.com/images/I/A1sB5OQxKwL._SL1500_.jpg" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src="" alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        silk belgium shaggy iran knotted
        <img src="" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
  )
}

export default AboutUs