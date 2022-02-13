import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)


  return (
    <div>
      <nav className='container'>
        <div className="navbar">

        <div className="logo-icon">
         <Link to="/">
          <img src="./images/logo.png" alt="" srcset=""  className='navbar-logo'/>
         </Link>
         </div>

         <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times-circle' : 'fas fa-bars'}/>
         </div>


         <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <ul className='list-group'>
              <li className="nav-item">
                <Link to='/' className='nav-links'>
                  Home
                </Link>
                </li>

                <li className="nav-item">
                <Link to='/MenCollection' className='nav-links' >
                  Mens
                </Link>
                </li>

                <li className="nav-item">
                <Link to='/WomenCollection' className='nav-links'>
                  Womens 
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/KidsCollection' className='nav-links'>
                  Kids 
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/Accessories' className='nav-links'>
                Accessories
                </Link>
              </li>
            </ul>
         </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
