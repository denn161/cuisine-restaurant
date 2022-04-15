import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images'

import './AboutUs.scss';

const AboutUs = () => (
   <section className='section__about app__bg' id='about'>
       <div className='about__g'>
           <img src={images.G} alt="" />
         </div>
         <div className="container about__container">
       <div className="about">       
         <div className="about__item about__end">
          <SubHeading title={'About Us'} classes={'section__title'}/>
          <div className="about__item-text text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Quis pharetra adipiscing ultrices vulputate posuere tristique.
            In sed odio nec aliquet eu proin mauris et.
          </div>
          <a className='btn' href="/">Know More</a>
         </div>
         <div className="about__item about__img">
         <img src={images.knife} alt="knifePhoto" />
         </div>
         <div className="about__item about__start">
         <SubHeading title={'Our History'}  classes={'section__title'} />
         <div className="about__item-text text">
           Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In
           sed odio nec aliquet.
          </div>
          <a className='btn' href="/">Know More</a>
         </div>        
       </div>
     </div>
    

   </section>
);

export default AboutUs;
