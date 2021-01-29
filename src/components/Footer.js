import React from 'react';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <h4 id='footer-copyright'>2021 &copy; NTHW</h4>
      <div className='social-icons'>
        <a className='footer-social-icon' href='https://github.com/nthw11'>
          <img src={githubIcon} alt='github' />
        </a>
        <a className='footer-social-icon' href='www.linkedin.com/in/nthw'>
          <img src={linkedinIcon} style={{ fill: '#FFFFFF' }} alt='linkedin' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
