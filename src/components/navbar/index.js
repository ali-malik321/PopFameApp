import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import {MdNotes} from "react-icons/md";
import Dropdown from '../dropdownMenu/dropdown';
import {VscClose} from "react-icons/vsc";
import logo from "../../assets/globalAssets/POPFAMELOGO.svg"

import { motion } from "framer-motion";



function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <motion.img  style={{
          width: 176,
          height: 112,
                position: "absolute"
        }}  initial={{ 
          scale: 2.5,  
           left: 442,
           top: 83,
        //  opacity:0.3,
      
        }}
            animate={{
               left: -36,
               top: -38,
              scale: 0.42,
                //  opacity:1,

              }}
            transition={{   
               duration: 0.8,
               ease: "easeInOut"

              // delay: 0.1,
              
           }}
 className='logo' src={logo} alt="cccc"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ?  < VscClose/> : <MdNotes />} 
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links hover-underline-animation' onClick={closeMobileMenu}>
              Jobs
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links hover-underline-animation'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links hover-underline-animation'
              onClick={closeMobileMenu}
            >
              Account 
            </Link>
            {dropdown && <Dropdown />}
          </li>
        
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
