import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <NavLink
          exact
          activeClassName='logo__link--active'
          id='nthw-logo'
          to='/'
        >
          NTHW
        </NavLink>
        <ul className='nav-bar'>
          <li>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              // className='nav-link'
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              // className='nav-link'
              to='/portfolio'
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              // className='nav-link'
              to='/blogs'
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              // className='nav-link'
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className='nav-mini-bar'>
          <li>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              // className='nav-link'
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              // className='nav-link'
              to='/portfolio'
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              // className='nav-link'
              to='/blogs'
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName='navbar__link--active'
              // className='nav-link'
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../index.css';

// const Navbar = () => {
//   return (
//     <nav>
//       <div>
//         <a href='/' id='nthw-logo'>
//           NTHW
//         </a>
//         <ul className='nav-bar'>
//           <li className='nav-link active'>
//             <a href='/about'>About</a>
//           </li>
//           <li className='nav-link'>
//             <a href='/portfolio'>Portfolio</a>
//           </li>
//           <li className='nav-link'>
//             <a href='/blogs'>Blog</a>
//           </li>
//           <li className='nav-link'>
//             <a href='/contact'>Contact</a>
//           </li>
//         </ul>
//         <ul className='nav-mini-bar'>
//           <li className='nav-link active'>
//             <a href='/about'>About</a>
//           </li>
//           <li className='nav-link'>
//             <a href='/portfolio'>Portfolio</a>
//           </li>
//           <li className='nav-link'>
//             <a href='/blogs'>Blog</a>
//           </li>
//           <li className='nav-link'>
//             <a href='/contact'>Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
