import React from 'react';

const Help = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Need Help?</h1>
      <h2>If you need any assistance regarding online voting, please click on the image below:</h2>
      <a 
        href="https://www.youtube.com/watch?v=iMojalqqOg8"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', margin: '0 auto', textDecoration: 'none', color: 'inherit' }}
      >
        <img 
          src="https://victoryatl.com/app/uploads/2023/01/Care-At-Victory_Ad-Graphic.jpg" 
          alt="Help Video Thumbnail"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </a>
    </div>
  );
};

export default Help;
