import React from 'react'
import { Link } from 'react-router-dom';


import "./Home.css"
import HeroSection from './heroSection'
import downarrow from "../../assets/globalAssets/seconddownarrow.svg"

import Cleaning from "../../assets/sliderAssets/cleaning.png"
import landscaping from "../../assets/sliderAssets/landscaping.png"
import furnitureasseembly from "../../assets/sliderAssets/furnitureassembly.png"
import moving from "../../assets/sliderAssets/moving.png"
import Plumbing from "../../assets/sliderAssets/Plumbing.png"
import lady2slider from "../../assets/sliderAssets/lady2slider.svg"
import glassesman2slider from "../../assets/sliderAssets/glassesman2slider.svg"
import boy2slider from "../../assets/sliderAssets/boy2slider.svg"



import firstgroup from "../../assets/sliderAssets/firstgroup.png"
import secondgroup from "../../assets/sliderAssets/secondgroup.png"
import thirdgroup from "../../assets/sliderAssets/thirdgroup.png"

import airbnd from "../../assets/sliderAssets/airbnd.svg"
import automatic from "../../assets/sliderAssets/automatic.svg"
import bissell from "../../assets/sliderAssets/bissell.svg"
import godaddy from "../../assets/sliderAssets/godaddy.svg"
import microsoft from "../../assets/sliderAssets/microsoft.svg"
import nasdaq from "../../assets/sliderAssets/nasdaq.svg"



import paint from "../../assets/globalAssets/paint.png"
import search from "../../assets/globalAssets/search.svg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderButton from './sliderButton';

import qrcodeclient from "../../assets/globalAssets/qrcodeclient.svg"
import qrcodeserviceprovider from "../../assets/globalAssets/qrcodeserviceprovider.svg"




const HomePage = () => {

  const sliderData = [
    "Delicious",
    "Healthyfood",
    "Cheflife",
    "Tasty",
    "Recipe",
    "Foodbloger",
    "Homemade",
    "Recipe"
  ]
  const imgData = [
    airbnd,
    automatic,
    bissell,
    godaddy,
    microsoft,
    nasdaq,

  ]
  const listImgItems = imgData.map((e) => {
    return (
      <img src={e} alt="logo" className='non-slider-images-tag' />
    );
  })

  const listItems = sliderData.map((e) => {
    return (
      <SliderButton name={e} />
    );
  })


  const secondCarasolsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]

  };
  return (
    <>
      <HeroSection />
      <div className='second-herosection'>
        <img src={downarrow} alt="logo" className='' />
      </div>
      <div className='Main-homepage-wrapper'>

        <div className='carasol-section'>

          <div className='first-homepage-container'>

            <img src={paint} alt="logo" className='first-image-container' />

            <div class="first-search">
              <img className='first-search-img' src={search} alt="logo" />
              <input class="first-search-txt" type="text" name="" placeholder="Search Here" />

            </div>
          </div>



          <div className='inner-carasol-section'>

            <div className='carasol-text-section'>
              <p className='carasol-p-tag'>What We Offer</p>
            </div>

            <div className='slick-slider-container'>

              <Slider {...settings}>

                <div className="slick-slider-inner-container">
                  <div className='inner-container-img-div'>
                    <img className="slick-slider-img" src={landscaping} alt="" />
                  </div>
                  <div className='inner-container-text-div'>
                    <p className='slick-slider-p-tag'>Landscaping</p>
                  </div>
                </div>

                <div className="slick-slider-inner-container">
                  <div className='inner-container-img-div'>
                    <img className="slick-slider-img" src={Cleaning} alt="" />
                  </div>
                  <div className='inner-container-text-div'>
                    <p className='slick-slider-p-tag'>Cleaning</p>
                  </div>
                </div>

                <div className="slick-slider-inner-container">
                  <div className='inner-container-img-div'>
                    <img className="slick-slider-img" src={furnitureasseembly} alt="" />
                  </div>
                  <div className='inner-container-text-div'>
                    <p className='slick-slider-p-tag'>Furniture <br />Asseembly</p>
                  </div>
                </div>

                <div className="slick-slider-inner-container">
                  <div className='inner-container-img-div'>
                    <img className="slick-slider-img img-radius" src={moving} alt="" />
                  </div>
                  <div className='inner-container-text-div'>
                    <p className='slick-slider-p-tag'>Moving</p>
                  </div>
                </div>

                <div className="slick-slider-inner-container">
                  <div className='inner-container-img-div'>
                    <img className="slick-slider-img" src={Plumbing} alt="" />
                  </div>
                  <div className='inner-container-text-div'>
                    <p className='slick-slider-p-tag'>Plumbing</p>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
          <div className='second-arrow'>
            <img src={downarrow} alt="logo" className='' />
          </div>
        </div>


        <div className='third-carasol-section'>

          <div className='third-section-text'>
            <p>Find Services Providers In Town</p>
          </div>

          <div className='inner-third-carasol-section'>
            <Slider {...secondCarasolsettings}>

              <div className='Main-second-carasol-component'>
                <div className='inner-Main-second-carasol-component'>

                  <div className='first-inner-carasol-component'>
                    <div className='first-inner-carasol-profile-section'>
                      <span><img src={lady2slider} alt="logo" className='profile-section-img' /></span>
                    </div>
                    <div className='first-inner-carasol-textandstar-section'>
                      <span className='inner-carasol-text-span'>Emman</span>
                      <span className='inner-carasol-star-span'><img src={firstgroup} alt="logo" className='' /></span>
                    </div>
                  </div>

                  <div>
                    {listItems}
                  </div>
                </div>
              </div>

              <div className='Main-second-carasol-component'>
                <div className='inner-Main-second-carasol-component'>

                  <div className='first-inner-carasol-component'>
                    <div className='first-inner-carasol-profile-section'>
                      <span><img src={glassesman2slider} alt="logo" className='profile-section-img' /></span>
                    </div>
                    <div className='first-inner-carasol-textandstar-section'>
                      <span className='inner-carasol-text-span'>William</span>
                      <span className='inner-carasol-star-span'><img src={secondgroup} alt="logo" className='' /></span>
                    </div>
                  </div>

                  <div>
                    {listItems}
                  </div>
                </div>
              </div>

              <div className='Main-second-carasol-component'>
                <div className='inner-Main-second-carasol-component'>

                  <div className='first-inner-carasol-component'>
                    <div className='first-inner-carasol-profile-section'>
                      <span><img src={boy2slider} alt="logo" className='profile-section-img' /></span>
                    </div>
                    <div className='first-inner-carasol-textandstar-section'>
                      <span className='inner-carasol-text-span'>Steve</span>
                      <span className='inner-carasol-star-span'><img src={thirdgroup} alt="logo" className='' /></span>
                    </div>
                  </div>

                  <div>
                    {listItems}
                  </div>

                </div>

              </div>

              <div className='Main-second-carasol-component'>
                <div className='inner-Main-second-carasol-component'>

                  <div className='first-inner-carasol-component'>
                    <div className='first-inner-carasol-profile-section'>
                      <span><img src={lady2slider} alt="logo" className='profile-section-img' /></span>
                    </div>
                    <div className='first-inner-carasol-textandstar-section'>
                      <span className='inner-carasol-text-span'>Emman</span>
                      <span className='inner-carasol-star-span'><img src={firstgroup} alt="logo" className='' /></span>
                    </div>

                  </div>
                  <div>
                    <div>
                      {listItems}
                    </div>
                  </div>


                </div>

              </div>

            </Slider>
          </div>

          <div className='non-slider-section'>
            <div className='non-slider-text-section'>
              <p>Trusted by</p>
            </div>
            <div className='non-slider-images-section'>

              {listImgItems}

            </div>

          </div>
          <div className='second-arrow'>
            <img src={downarrow} alt="logo" className='' />
          </div>

        </div>

        <div className='last-landingpage-section'>

          <div className='first-column-last-section'>
            <h3>Download Our App</h3>
            <p>Scan the following QR code to download our applications.</p>

          </div>
          <div className='second-column-last-section'>
            <div className='main-div-second-column'>
              <img src={qrcodeclient} alt="logo" className='' />
              <p>Popfame-Client (Beta)</p>
            </div>

            <div className='main-div-second-column'>
              <img src={qrcodeserviceprovider} alt="logo" className='' />
              <p>Popfame-Service Provider (Beta)</p>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default HomePage