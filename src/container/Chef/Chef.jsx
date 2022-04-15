import React from 'react';
import{ SubHeading} from '../../components'
import images from '../../constants/images'

import './Chef.scss';

const Chef = () => (
   <section className='section__chef app__bg'>
     <div className="container">
       <div className="chef">
         <div className="chef__item">
         <div className='chef__item-img'>
         <img src={images.chef} alt="chefPhoto" />
         </div>
         </div>
         <div className="chef__content">
            <SubHeading title={'Chef’s Word'} classes={'subheading__title'}/>
            <h3 className='section__title chef__title'>What we believe in</h3>           
            <div className="chef__content-text">            
                <p className='text'><span  className='quote'><img src={images.quote} alt="quote" /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque
                 congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>                
                           
            </div>
            <div className="chef__name">
            Kevin Luo
            <span className='chef__position'>Chef & Founder</span>
            </div>
            <div className='chef__content-img'>
              <img src={images.sign} alt="sign" />
            </div>
         </div>
       </div>
     </div>


   </section>
);

export default Chef;
