import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images, data } from '../../constants';
import './Laurels.css';

// const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (

//   <div className="app__laurels_awards-card">
//     <img src={imgUrl} alt="awards" />
//     <div className="app__laurels_awards-card_content">
//       <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
//       <p className="p__opensans">{subtitle}</p>
//     </div>
//   </div>
// );


const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
  <Navbar/>
  <div className='about_bg'>
<div className='about_img'>
</div>
<div className='about_content'>
In the rich history of carpetmaking, the exquisite Persian rug serves not just as a crown jewel but also as a testament and keeper of millennia-old art and culture. Today, having journeyed since antiquity, it invites a reinterpretation – contemporary and endearing.
<h4>THE PERSIAN REBORN</h4>
Rare and unique in design, each carpet in this collection is an unconventional take on the traditional Persian rug. On its distinctive patterns, symmetry, and colours. Boldly narrated through striking off-centre designs intricately hand knotted in wool and pure silk. A compelling precedence in modern-day opulence.
</div>

</div>
  </div>
);

export default Laurels;