import React, { Fragment } from 'react';

import redPortrait from '../assets/red-portrait.JPG';

const Home = () => {
  return (
    <Fragment>
      <div className='headline'>
        <h1>Nathaniel Wallace</h1>
      </div>
      <div className='home-page'>
        <h1 className='header'>
          Self-taught full-stack web developer based in Raleigh, North Carolina
        </h1>
        <div id='red-portrait'>
          <img src={redPortrait} alt='Nathaniel Wallace' />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
