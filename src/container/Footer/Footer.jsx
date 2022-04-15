import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { SubHeading } from '../../components';
import images from '../../constants/images';

import './Footer.scss';

const Footer = () => (
    <footer className='footer app__bg' id='contact'>
      <div className="container">
        <div className="footer__top">
             <SubHeading  title={'Newsletter'} classes={'subheading__title'}  />
             <h3 className='section__title footer__top-title'>Subscribe to Our Newsletter</h3>
             <div className="footer__top-subtitle">And never miss latest Updates!</div>
             <form className='footer__top-form'>
               <input className='footer__top-input' type="text" placeholder='Email Address' />
               <button className='btn footer__form-btn '>Subscribe</button>
             </form>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-item">
               <div className="footer__bottom-title">Contact Us</div>
               <div className="footer__bottom-item_address text">9 W 53rd St, New York, NY 10019, USA</div>
               <div className="footer__bottom-item_numbers ">
               <a className='text' href="tel:+1 212-344-1230">+1 212-344-1230</a>
               <a className='text' href="tel:+1 212-555-1230">+1 212-555-1230</a>
               </div>
          </div>
          <div className="footer__bottom-item">
               <div className="footer__bottom-logo">
                 <img src={images.footerLogo} alt="logo" />
               </div>
              <SubHeading
               title={'"The best way to find yourself is to lose yourself in the service of others.”'}
               classes={'subheading__title'}   />
               <ul className="footer__bottom-social">
                <li><a href="/"><FiFacebook fontSize={27} /></a></li>
                <li><a href="/"><FiTwitter fontSize={27} /></a></li>
                <li><a href="/"><FiInstagram fontSize={27} /> </a></li>
               </ul>
          </div>
          <div className="footer__bottom-item">
               <div className="footer__bottom-title">Working Hours</div>
              <div className="footer__bottom-times">
                <span className='text'>Monday-Friday:<br/>08:00 am -12:00 am</span>
                <span className='text'>Saturday-Sunday:<br/>07:00am -11:00 pm</span>
               </div>
          </div>
        </div>       
      </div>
      <div className="footer__bottom-copy">
         <span className='text'>2022 Gerícht. All Rights reserved.</span>
        </div> 
    </footer>
);

export default Footer;
