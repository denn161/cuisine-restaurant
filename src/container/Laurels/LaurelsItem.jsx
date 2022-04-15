import React from 'react'

function LaurelsItem({img,title,subtitle}) {
  return (
     <div className='laurels__list-item'>
       <div className="laurels__list-img">
        <img src={img} alt="icon" />
       </div>
       <div className="laurels__list-content">
           <div className="laurels__list-title">{title}</div>
           <div className="laurels__list-subtitle text">{subtitle}</div>
       </div>
     </div>
  )
}

export default LaurelsItem