import React from 'react';

import './MenuItem.scss';

const MenuMobile = () => (
  <nav className='menu slide-bottom '>     
            <ul className="menu__links">
            <li className='menu__links-item'><a className='menu__links-link' href="/">Home</a></li>
            <li className='menu__links-item'><a className='menu__links-link' href="/">Pages</a></li>
            <li className='menu__links-item'><a className='menu__links-link' href="/">Contact Us</a></li>
            <li className='menu__links-item'><a className='menu__links-link' href="/">Blog</a></li> 
            <li className='menu__links-item'><a className='menu__btns-link' style={{color:'orange'}} href="/">Log in</a></li>
            <li className='menu__links-item'><a className='menu__btns-link' style={{color:'gold'}} href="/">Registration</a>  </li>
           </ul>                                   
             
         
  </nav>
);

export default MenuMobile;
