import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';
import './findus.scss'

const FindUs = () => (
   <section className='section__find app__bg'>
     <div className="container">
        <div className="find">
          <div className="find__item find__content">
            <SubHeading title={'Contact'} classes={'subheading__title'}   />
             <h3 className="section__title find__title">Find Us</h3>
             <p className="text">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
              <div className="find__subtitle">Opening Hours</div>
              <div className="find__time">
                <span>Mon - Fri: 10:00 am - 02:00 am</span>
                <span>Sat - Sun: 10:00 am - 03:00 am</span>
              </div>
              <a className='btn' href="/">Visit Us</a>
          </div>
          <div className="find__item">
            <div className="find__item-img">
              <img src={images.findus} alt="image" />
            </div>
          </div>
        </div>
     </div>

   </section>
);

export default FindUs;
