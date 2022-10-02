import React from 'react'
import "./homePage.css"
import GroupBackground from "../../assets/globalAssets/GroupBackground.png"
import mobileframe from "../../assets/globalAssets/mobileframe.png"
import search from "../../assets/globalAssets/search.svg"
import messages from "../../assets/globalAssets/messages.svg"
import { Link } from 'react-router-dom'



const HeroSection = () => {
  return (
    <div className='wrapper'>

      <div className='hero-flex-section'>

        <div className='first-container'>

          <h3 className='hero-section-header-tag'>Quality Home Services, On Demand Plumbing</h3>
          <p className='hero-section-p-tag'>Experienced,hand-picked Professionals to serve you at your doorstep</p>
          <div class="search">
            <img className='search-img' src={search} alt="logo" />
            <input class="search-txt" type="text" name="" placeholder="Enter Here"/>
            <a class="search-btn" href="/" >
              search
            </a>

          </div>
        </div>

        <div className='second-container'>
        
          <img className='BackgroundGroup-img1' src={mobileframe} alt="logo" />
            <img className='BackgroundGroup-img2' src={GroupBackground} alt="logo" />
        </div>
      </div>
      <div style={{position:'fixed',zIndex:1, bottom: 10, right: 10}}>
     <Link to='/'><img  src={messages} alt="logo" /></Link>
      </div>
    </div>
  )
}

export default HeroSection