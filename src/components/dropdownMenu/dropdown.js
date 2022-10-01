import React, { useState } from 'react';
import { MenuItems } from './menuItems.js';
import './dropdown.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/useSlice'
import Logout from '../../pages/Logout/Logout.js';

function Dropdown() {
  const [click, setClick] = useState(false);

  const user = useSelector(state=>state.user.user );

  const handleClick = () => setClick(!click);

  return (
    <>
     {user ?  
 <Logout />
         
          :
          <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
      
            <li>
              <Link
                className="dropdown-link"
                to='/login'>
                Login
              </Link>  
            </li>
            
            <li>
              <Link
                className="dropdown-link"
                to='/'>
                SignUp
              </Link>
            </li>
            </ul>
        }

    
    </>
  );
}

export default Dropdown;
