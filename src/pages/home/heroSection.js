import React from 'react'
import "./homePage.css"
import GroupBackground from "../../assets/globalAssets/GroupBackground.png"
import mobileframe from "../../assets/globalAssets/mobileframe.png"
import search from "../../assets/globalAssets/search.svg"
import messages from "../../assets/globalAssets/messages.svg"
import downarrow from "../../assets/globalAssets/seconddownarrow.svg"
import { Link } from 'react-router-dom'



const HeroSection = () => {
  return (
    <div className='wrapper'>

      <div className='hero-flex-section'>

        <div className='first-container'>

          <h3 className='hero-section-header-tag'>Quality Home Services, On Demand Plumbing</h3>
          <p className='hero-section-p-tag'>We Make Finding Home Services Smoother,Faster and Better.</p>
          <div class="search">
            <form>
            <img className='search-img' src={search} alt="logo" />
            <input class="search-txt" type="text" name="" placeholder="Enter Here"/>
            <Link class="search-btn" to="/" >
              search
            </Link>
            </form>

          </div>
        </div>

        <div className='second-container'>
        
          <img className='BackgroundGroup-img1' src={mobileframe} alt="logo" />
            <img className='BackgroundGroup-img2' src={GroupBackground} alt="logo" />
        </div>
      </div>
      <div className='second-herosection'>
        <img src={downarrow} alt="logo" className='' />
      </div>

    </div>
  )
}

export default HeroSection