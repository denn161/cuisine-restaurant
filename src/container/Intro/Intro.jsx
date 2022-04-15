import React, { useRef,useState } from 'react';
import {BsFillPlayFill,BsPauseFill } from 'react-icons/bs'
import meal from '../../assets/meal.mp4'

import './Intro.scss';

const Intro = () =>{

  const [playVideo, setPlayVideo] = useState(false)

  const handleVideo = ()=>{
    setPlayVideo((prevVideo)=>!prevVideo)  

     if(playVideo){
        videoRef?.current.pause()      
     }else{
       videoRef?.current.play()
     }

  }

  const videoRef =useRef()
  return (
    <section className='section__intro'>
     <video src={meal} type='video/mp4' loop controls={false} muted ref={videoRef}/>
     <div className='intro__play'>
       <div className='intro__play-btn' onClick={handleVideo}>
         {playVideo?(<BsPauseFill color='#fff' fontSize={30}/>):(<BsFillPlayFill color='#fff' fontSize={30}/>)}
       </div>
     </div>
    </section>
  );
}

export default Intro;
