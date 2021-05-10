import React from 'react';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contact-info'>
        <h3 id='name'>Nathaniel Wallace</h3>
        <h3 id='email'>
          <a href='mailto:nthw.dev@gmail.com'>nthw.dev@gmail.com</a>
        </h3>
        <h3 id='phone'>919.561.6904</h3>
      </div>
      <div className='social-icons'>
        <a
          className='footer-social-icon'
          href='https://github.com/nthw11'
          target='_blank'
          rel='noreferrer'
        >
          <img src={githubIcon} alt='github' />
        </a>
        <a
          className='footer-social-icon'
          href='https://www.linkedin.com/in/nthw'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedinIcon} style={{ fill: '#FFFFFF' }} alt='linkedin' />
        </a>
      </div>
      <h4 id='footer-copyright'>2021 &copy; NTHW</h4>
    </div>
  );
};

export default Footer;
