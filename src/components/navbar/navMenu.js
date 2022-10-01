import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenuRightAlt, CgClose } from "react-icons/cg";


const NavMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <Nav>
            <div className={openMenu ? 'menuIcon active' :'menuIcon' }>
                <ul className='navbar-list'>
                    <li>
                        <NavLink className="navbar-link" onClick={()=>setOpenMenu(false)}  to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" onClick={()=>setOpenMenu(false)} to="/">about</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" onClick={()=>setOpenMenu(false)} to="/">services</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" onClick={()=>setOpenMenu(false)}  to="/">pages</NavLink>
                    </li>
                </ul>
                <div className='mobile-navbar-btn'>
                    <CgMenuRightAlt name="menu-outline" onClick={()=>setOpenMenu(true)} className='mobile-nav-icon' />
                    <CgClose name="close-outline" onClick={()=>setOpenMenu(false)} className='close-outline mobile-nav-icon' />
                </div>
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
.navbar-list{
    display:flex;
    gap:4.8rem;
}
li{
    list-style:none;
}
.navbar-link{
    &:link,
    &:visited{
        display:inline-block;
        text-decoration:none;
        font-size:0.8rem;
        text-transform: uppercase;
        color: blue;
        transition: color 0.3s linear;
    }
   &:hover,
   &:active{
    color: #000;
   }


}
.mobile-navbar-btn{
    display:none;
     
    .close-outline{
        display:none;  
    }
   }
   .mobile-navbar-btn[name="close-outline"]{
    display:none;
   }
   @media (max-width:786px){
    .mobile-navbar-btn{
        display:inline-block;
        z-index:999;
    }
    .mobile-nav-icon{
        font-size:2.2rem;
        color:#000;
    }
    .navbar-list{
        width: 100vw;
        height:100vh;
        position: absolute;
        top:0;
        display: none !important;
        left:0;
        background-color: #fff;
        display: flex;
        justify-content:center;
        align-content: center;
        flex-direction:column;
        text-align:center;
        transform: translateX(100%);
        visibility:hidden;
        opacity:0;
    
    li{
    &.navbar-link{
        &:link,
        &:visited{
            
            font-size:4.2rem;
           
        }
       &:hover,
       &:active{
        color: #000;
       }
    }
}
    }
    .active .mobile-nav-icon{
        font-size:3rem;
        display: none;
        position: absolute;
        top: 8%;
        right:10%;
        color: black;
        z-index:999;

    }
    .active .close-outline{
        display:inline-block;
    }
    .active .navbar-list{
        visibility:visible;
        opacity:1;
        display: block !important;
        transform: translateX(0);
        z-index:999;

      
        position: absolute;
        top:0;
        left:0;
        background-color: #fff;
        display: flex !important;
        -webkit-box-pack: center;
        -webkit-justify-content: center !important;
        align-content: center;
        flex-direction:column;
        text-align:center;

    }
}
   
`;

export default NavMenu