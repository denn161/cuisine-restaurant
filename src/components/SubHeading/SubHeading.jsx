import React from 'react';
import images from '../../constants/images';


const SubHeading = ({title,classes}) => (
  <>
 <div className={classes}>{title}</div>
  <div className='spoon' style={{maxWidth:'47px'}}><img  src={images.spoon} alt="spoon" /></div>    
  </>
);

export default SubHeading;
