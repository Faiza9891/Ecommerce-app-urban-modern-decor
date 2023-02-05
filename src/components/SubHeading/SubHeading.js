import React from 'react'

const SubHeading = ({title}) => {
  return (
    <div style={{ marginRight:'-2.5rem',marginTop:"-1rem",marginBottom:"-2rem" ,padding:"2rem",color:"white",fontFamily:"'Cormorant Upright', serif",fontSize:"1.8vw",display:"inline-block"}}>
    <p className="p__cormorant">{title}</p>
  </div>
  )
}

export default SubHeading