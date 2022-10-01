import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/globalAssets/POPFAMELOGO.svg"
import NavMenu from './navMenu'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="logo" className='logo'/>
      </NavLink>  
      <NavMenu/>
    </MainHeader>
  )
}

const MainHeader= styled.header`
padding:0 4.8rem;
height: 10rem;
background-color: #fff;
display:flex;
justify-content: space-between;
align-items:center;

.logo{
  height: auto;
  max-width:30%;
}
`;


export default Navbar