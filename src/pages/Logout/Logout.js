import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/useSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Logout = () => {
    const user = useSelector(state => state.user.user);
    console.log("🚀 ~ file: Logout.js ~ line 7 ~ Logout ~ user", user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) =>{
        e.preventDefault();
       dispatch(logout())
       navigate('/')

    }
    
  return (
    <div>
       <ul
          className= 'dropdown-menu'>
        <li>
        <Link to='/' className="dropdown-link" onClick={(e)=> handleLogout(e)}>logout</Link>
        </li>
    </ul>
    </div>
  )
}

export default Logout