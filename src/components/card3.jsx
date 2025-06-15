import React from 'react'
import './components.css'

const Card3 = ({img,name}) => {
  return (
    <div className='cartshop'>
        <img src={img} alt="" />
        <p style={{'color' : '#555555','fontWeight' : 'bold','margin' : "10px 0px"}}>{name}</p>
    </div>
  )
}

export default Card3