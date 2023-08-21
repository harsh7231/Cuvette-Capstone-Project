import React from 'react';
import '././ImageSection.css'; 
import BackgroundImage from '../../Assests/left-img.png'// Create this CSS file to style the image section

const ImageSection = () => {
  return (
    <> 
      <div className="bottom">
        <p>Discover new things on SuperApp</p>
      </div>
      <img src={BackgroundImage}/>
    </>
  );
}

export default ImageSection;
