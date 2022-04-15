import React from 'react';
import { SubHeading } from '../../components';
import { cocktails, wines } from '../../constants/data';
import images from '../../constants/images';

import './SpecialMenu.scss';
import SpecialMenuItem from './SpecialMenuItem';

const SpecialMenu = () => (

   <section className='section__menu'>
    <div className="container special__container">
      <SubHeading title={'Menu that fits you palatte'}/>
      <h3 className='section__title specialmenu__title'>Today’s Special</h3>
    
    <div className="special__menu">
        <div className="special__menu-item">
          <div className='special__menu-title'>Wine & Beer</div>
           {wines.map(({title,price,tags})=>
          <SpecialMenuItem title={title} tags={tags} price={price} key={price} />               
           )}
        </div>
        <div className="special__menu-img">        
          <img src={images.menu} alt="menuPhoto" />        
        </div>
        <div className="special__menu-item">
          <div className='special__menu-title'>Cocktails</div>
           {cocktails.map(({title,tags,price})=>
              <SpecialMenuItem title={title} tags={tags} price={price} key={price} />
            )}
        </div>
    </div>
    <a href="/" className='btn'>View More</a>
    </div>

   </section>
);

export default SpecialMenu;
