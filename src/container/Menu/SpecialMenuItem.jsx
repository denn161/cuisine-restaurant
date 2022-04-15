import React from 'react'

const SpecialMenuItem = ({title,price,tags}) => {
  return (
    <div className='special__position'>
     <div className='special__position-info' >
     <div className='special__position-name'>
      {title}   
      </div>
      <div className='special__position-border'></div>
    <div className='special__position-price'>{price}</div>
     </div>
     <span>{tags}</span>
  </div>
  )
}

export default SpecialMenuItem