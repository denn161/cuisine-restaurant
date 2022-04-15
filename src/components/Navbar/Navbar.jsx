import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import  MenuMobile from '../Menuitem/MenuMobile'
import images from '../../constants/images';

import './Navbar.scss';


const Menu =()=>(
  <>
<li className='navbar__links-item'><a className='navbar__links-link' href="#home">Home</a></li>
<li className='navbar__links-item'><a className='navbar__links-link' href="#gallery">Pages</a></li>
<li className='navbar__links-item'><a className='navbar__links-link' href="#contact">Contact Us</a></li>
<li className='navbar__links-item'><a className='navbar__links-link' href="/">Blog</a></li>

  </>
)


const Navigation =()=>(
  <>
    <nav className='nav'>     
              <ul className="navbar__links">
               <Menu/>           
           </ul> 
           <div className='navbar__btns'>
               <div className='navbar__btns-auth'>
               <a className='navbar__btns-link' style={{color:'orange'}} href="/">Log in&nbsp;/</a>
               <a className='navbar__btns-link' style={{color:'gold'}} href="/">&nbsp;Registration</a>             
               </div>               
                <svg width="2" height="57" viewBox="0 0 2 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0V57" stroke="url(#paint0_radial_0_364)"/>
                    <defs>
                    <radialGradient id="paint0_radial_0_364" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)">
                    <stop offset="0.588542" stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </radialGradient>
                    </defs>
                    </svg>               
               <a className='navbar__btns-book navbar__btns-link' href="/">Book Table</a>
             </div> 
           </nav>
  
  </>
)

const Navbar = () => {

 const [toggleMenu,setToggleMenu]=useState(false)

 return (    
  
        <div className="navbar">
            <div className="navbar__logo"><a href="/"><img src={images.gericht} alt="logo"/></a> </div>   
             <Navigation/>
           <div className='navbar__menu'>           
              {toggleMenu?
              <MdOutlineRestaurantMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(false)}/>:
              <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>             
            
            }       
           </div>
         {toggleMenu&&<MenuMobile/>}

        </div>     
   

); 

}

export default Navbar;
