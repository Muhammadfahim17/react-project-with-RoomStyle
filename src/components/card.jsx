import React, { Children } from 'react'
import './components.css'


const Card = ({img,des}) => {
  return (
    <div className='cart'>
        <img src={img} alt="" />
        <p style={{'color' : '#111111' ,'fontWeight' : 'bold'}}>{des}</p>
    </div>
  )
}

export default Card