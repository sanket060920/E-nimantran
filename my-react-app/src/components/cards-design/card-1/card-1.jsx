import React from 'react';
import '../card-1/card-1.css'; // Import the CSS file for styling
import C1_1 from "./image/c1_1.jpg" 
const ResponsiveImage = () => {
    const FamilyData = [
        { id: 1, title: 'Husband', content: 'Lorem ipsum dolor sit amet.'  },
        { id: 2, title: 'Wife', content: 'Consectetur adipiscing elit.' },
        { id: 3, title: 'H-Father', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 4, title: 'H-Mother', content: 'Ut enim ad minim veniam.' },
        { id: 5, title: 'W-Father', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 6, title: 'W-Mother', content: 'Ut enim ad minim veniam.' },
        // { id: 7, title: 'GrandFather', content: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 8, title: 'Date', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { id: 9, title: 'Location', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { id: 10, title: 'Date', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      ];
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
