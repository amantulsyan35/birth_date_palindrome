import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-social'>
        <a href='https://www.linkedin.com/in/aman-tulsyan-88335b17a/ '>
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a href='https://twitter.com/aman_fullstack'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='https://github.com/amantulsyan35'>
          <i className='fab fa-github-alt'></i>
        </a>
        <a href='https://www.amantulsyan.com/'>
          <i className='fas fa-briefcase'></i>
        </a>
      </div>
      <hr />
      <div className='Footer-copyright'>© | 2020 | Aman</div>
    </div>
  );
};

export default Footer;
