import React from 'react';
import{ SubHeading} from '../../components';
import images from '../../constants/images';

import './Header.scss';
const Header = () => (
  <div className='container'>
    <div className='header section__wrapper' id='home'>
        <div className='header__item'>
             {/* <div className='header__tags'>
               <span>
               #Bar
                 </span>
                 <span>#Gericht</span>
             </div> */}
           <div className='header__info' >
           <SubHeading title={'Chase the new Flavour'} classes={'header__subtitle'}/>
            <h1 className='header__title title'>
              The key to Fine dining
               </h1>
          <div className='header__text'>Sit tellus lobortis sed senectus vivamus molestie.
            Condimentum volutpat morbi facilisis quam scelerisque sapien.
           Et, penatibus aliquam amet tellus </div>
          <a className='header__btn btn' href='/' >Explore Menu</a>
           </div>
        </div>      
        <div className='header__item header__img'>
           <img  src={images.welcome} alt="" />  
        </div>

    </div>
  </div>
);

export default Header;
