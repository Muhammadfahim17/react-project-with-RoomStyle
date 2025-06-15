import React from 'react'
import './components.css'

const Card2 = ({img,name,image,price}) => {
  return (
    <div className='cartproduct'>
        <img src={img} alt="" />
        <h2 style={{'color' : '#111111','fontSize' : '23px'}}>{name}</h2>
        <img src={image} alt="" />
        <p style={{'color' : '#111111','fontSize' : '18px','fontWeight' : 'bold'}}>{price}</p>
    </div>
  )
}

export default Card2