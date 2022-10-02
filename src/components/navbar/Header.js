import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../../assets/globalAssets/POPFAMELOGO.svg"
import Profile from "../../assets/globalAssets/Profile.svg"
import downarrow from "../../assets/globalAssets/downarrow.svg"
import Cross from "../../assets/globalAssets/Cross.svg"
import Fabars from "../../assets/globalAssets/Fabars.svg"
import notificationbell from "../../assets/globalAssets/notificationbell.svg"


import services from "../../assets/globalAssets/services.svg"
import messenger from "../../assets/globalAssets/messenger.svg"
import wallet from "../../assets/globalAssets/wallet.svg"
import loginlogo from "../../assets/globalAssets/loginlogo.svg"



import { Turn as Hamburger } from 'hamburger-react'


import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import "./navbar.css"


const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>

      <NavLink to="/">
        <img src={logo} alt="logo" className='logo' />
      </NavLink>

      <RightMenu className='RightMenu'>

      <NavLink className="job-post" to="/">Post a Job</NavLink>
        <NavLink className="Provider" to="/">Become a Provider</NavLink>
  <img onClick={() => setBurgerStatus(true)} src={notificationbell} alt="logo" className='Profile-logo-link' /> 
        <img src={Fabars} onClick={() => setBurgerStatus(true)} alt="logo" className='Fabars' />

        <div class="navigation">
          <img src={Profile} alt="logo" className='Profile-logo-link' /><span className='downarrow-span-link'><img src={downarrow} alt="logo" className='' /></span>
          <div class="navigation-content">
            <NavLink className="navbar-items" to="/"><img src={services} alt="logo" className='dropdown-link-logo' />Services</NavLink>
            <NavLink className="navbar-items" to="/"><img src={messenger} alt="logo" className='dropdown-link-logo' />Messages</NavLink>
            <NavLink className="navbar-items" to="/"><img src={wallet} alt="logo" className='dropdown-link-logo' />Wallet</NavLink>
            <span></span>
            <NavLink className="navbar-items" to="/login"><img src={loginlogo} alt="logo" className='dropdown-link-logo logo-top-padding' />Login</NavLink>

          </div>
        </div>

      </RightMenu>

      <div className='BurgerNav' style={{ transform: `${burgerStatus ? 'translateX(0)' : 'translateX(100%)'}` }}>

        <CloseWrapper>

          <img src={Cross} alt="logo" onClick={() => setBurgerStatus(false)} className='close-nav-icon' />

        </CloseWrapper>

        <li className='mobile-li'>
        <div class="navigation-link floatleft">
          <img src={Profile} alt="logo" className='Profile-logo' /><span className='downarrow-span'><img src={downarrow} alt="logo" className='' /></span>
          <div class="navigation-content">
            <NavLink className="navbar-items" to="/">Link 1</NavLink>
            <NavLink className="navbar-items" to="/">Link 2</NavLink>
          </div>
        </div>
        </li>

        <li className='mobile-li'>
          <NavLink className="Provider-navbar-link" to="/">Become a Provider</NavLink>
        </li>

        <li className='first-li'>
          <NavLink onClick={() => setBurgerStatus(false)} className="navbar-link" to="/">Services</NavLink>
        </li>

        <li>
          <NavLink onClick={() => setBurgerStatus(false)} className="navbar-link" to="/">Messages</NavLink>
        </li>

        <li>
          <NavLink onClick={() => setBurgerStatus(false)} className="navbar-link" to="/">Wallet</NavLink>
        </li>

        <li>
          <NavLink onClick={() => setBurgerStatus(false)} className="navbar-link" to="/">Find SP</NavLink>
        </li>

        <li>
          <NavLink onClick={() => setBurgerStatus(false)} className="navbar-link" to="/">Support</NavLink>
        </li>

        <li>
          <NavLink onClick={() => setBurgerStatus(false)} className="navbar-link" to="/">T & C</NavLink>
        </li>

        <li>
          <NavLink onClick={() => setBurgerStatus(false)} className="navbar-link" to="/">Login</NavLink>
        </li>

      </div>

    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
position: fixed;
background-color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;
.navbar-link{
    text-decoration:none;
    font-weight:500;
    color:#000;
    text-transform:uppercase;
    padding: 0 45px;
    flex-wrap:nowrap;
}
`;


const RightMenu = styled.div`
display: flex;
align-items: center;
gap: 2.5rem;

.navbar-link{
    text-decoration:none;
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media (max-width:900px){
  gap: 0.5rem;

`;


const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end
`;



