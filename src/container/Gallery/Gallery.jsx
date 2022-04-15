import React, { useRef } from 'react';
import {SubHeading} from '../../components'
import { galleries } from '../../constants/data';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort}  from 'react-icons/bs'

import './Gallery.scss';

const Gallery = () => {

  const scrollRef = useRef(null)

  const scroll =(direction)=>{

    const {current}=scrollRef

    if(direction==='left'){
      current.scrollLeft -=300

    }else{
      current.scrollLeft+=300
    }
  }
  return(   
      <section className='section__gallery' id='gallery'>
     
       <div className="gallery">
         <div className="gallery__item">
          <SubHeading title={'Instagram'}classes={'subheading__title'} />
          <h3 className='section__title gallery__title'>Photo Gallery</h3>
           <div className="text">
           Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Volutpat mattis
             ipsum turpis elit elit scelerisque egestas mu.
           </div>
           <a className='btn' href="/">View More</a>
         </div>
         <div className="gallery__slider">
          <div className="gallery__slider-container" ref={scrollRef}>
          {galleries.map((img,i)=><div className='gallery__slider-item' key={i+1}>
            <img src={img} alt="galleryPhtot" />
            <div className='gallery__slider-overlay'><a href="/" target={'_blank'} rel='noreferrer'><BsInstagram color='#fff' fontSize={27}/></a></div>
          </div>)}
          </div>
           <div className="gallery__slider-arrows">
             <BsArrowLeftShort   className='gallery__slider-arrow gallery__slider-arrow_left' onClick={() => scroll('left')}/>
             <BsArrowRightShort  className='gallery__slider-arrow gallery__slider-arrow_right'  onClick={() => scroll('right')} />
           </div>
         </div>
       </div>   
     
      </section>  
  )


}
export default Gallery;
