import React from 'react';

import ghfinder from '../assets/ghfindertriangle.png';
import ckeeper from '../assets/ckeepertriangle.png';
const Portfolio = () => {
  return (
    <div className='port-list'>
      <div className='port-item'>
        <a
          href='https://githubfinder011121.netlify.app'
          target='_blank'
          rel='noreferrer'
          className='port-link'
        >
          <img src={ghfinder} alt='github finder' />
          <h3 className='project-descript'>Github Finder</h3>
        </a>

        <h4 className='project-lang'>Technology used: MERN Stack</h4>
      </div>
      <div className='port-item'>
        <a
          href='https://floating-beach-29976.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
          className='port-link'
        >
          <img src={ckeeper} alt='github finder' />
          <h3 className='project-descript'>Contact Keeper</h3>
        </a>

        <h4 className='project-lang'>Technology used: MERN Stack</h4>
      </div>
    </div>
  );
};

export default Portfolio;
