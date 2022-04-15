import React from 'react';
import {SubHeading} from '../../components'
import {awards}  from '../../constants/data';
import images from '../../constants/images'

import './Laurels.scss';
import LaurelsItem from './LaurelsItem';

const Laurels = () => (
    <section className='section__laurels app__bg'>
       <div className='section__laurels-img'>
      <img src={images.logo} alt="logoLaurels" />
    </div>
     <div className="container">    
    <div className="laurels">
      <div className="laurels__item">
        <SubHeading title={'Awards & recognition'} classes={'subheading__title'} />
        <h2 className='section__title laurels__title'>Our Laurels</h2>
         <div className="laurels__item-list">
           {awards.map(({img,title,subtitle})=>
            <LaurelsItem img={img} title={title} subtitle={subtitle}/>
           )}
         </div>
      </div>
      <div className="laurels__item">
        <div className="laurels__item-img">
          <img src={images.laurels} alt="photoLaurels" />
        </div>
      </div>
    </div>
     </div>
    </section>
);

export default Laurels;
