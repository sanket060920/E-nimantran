import React from 'react';
import '../card-1/card-1.css'; // Import the CSS file for styling
import C1_1 from "./image/c1_1.jpg" 
const ResponsiveImage = () => {

  return (
    <div className='card-1-main-container'>
    <div className="container">
      <img src={C1_1} alt="Your Image" className="pop-up-image" />
      <div className="content">
        <h1>Your Header</h1>
        <p>
          Your smallng to do  around 50 words here.
        </p>
      </div>
    </div>    <div className="container">
      <img src={C1_1} alt="Your Image" className="pop-up-image" />
      <div className="content">
        <h1>Your Header</h1>
        <p>
          Your small paragraph with around 50 words goes here. Your small paragraph with around 50
          words goes here. Your small paragraph with around 50 words goes here.
        </p>
      </div>
    </div>
    </div>
  );
};

export default ResponsiveImage;
