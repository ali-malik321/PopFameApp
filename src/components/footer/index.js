import React from 'react'
import { Link } from 'react-router-dom'
import popfamelogo from '../../assets/globalAssets/POPFAMELOGO.svg'
import "./footer.css"

import GooglePlayLogo from '../../assets/globalAssets/GooglePlayLogo.svg'
import AppStoreWhite from '../../assets/globalAssets/AppStoreWhite.svg'

import facebooklogo from '../../assets/globalAssets/facebookfooterlogo.svg'
import instagramlogo from '../../assets/globalAssets/instagramfooterlogo.svg'
import twitterlogo from '../../assets/globalAssets/twitterfooterlogo.svg'
import youtubelogo from '../../assets/globalAssets/youtubefooterlogo.svg'
import messages from '../../assets/globalAssets/messages.svg'



const Footer = () => {
  return (
    <div className='main-footer-section'>
     
    <div className='first-child-section'>

      <div className='logo-child-section'>
      <img src={popfamelogo} alt="logo" className='' />


      </div>
      <div className='links-child-section'>

       <ul className='ul-links-section'>
        <li className='list-links-section'>
          <Link className='a-tag-section' to='/'>Services</Link>
          </li>
        <li className='list-links-section'>
          <Link className='a-tag-section' to='/'>Wallet</Link>
          </li>
        <li className='list-links-section'>
          <Link className='a-tag-section' to='/'>SUPPORT</Link>
          </li>
        <li className='list-links-section' >
          <Link className='a-tag-section' to='/'>Messages</Link>
          </li>
        <li className='list-links-section'>
          <Link className='a-tag-section' to='/'>Find SP</Link>
          </li>
        <li className='list-links-section'>
          <Link className='a-tag-section' to='/'>T & C</Link>
          </li>
       </ul>

      </div>
      <div className='firstchild-last-section'>
        <ul className='firstchild-last-ul-section'>
    <li className='firstchild-last-list-section'> 
      <Link className='a-tag-firstchild-last-section' to='/'>
        <img src={AppStoreWhite} alt="logo" className='' />
        </Link>
        </li>
     <li className='firstchild-last-list-section'>
      <Link className='a-tag-firstchild-last-section' to='/'>
        <img src={GooglePlayLogo} alt="logo" className='' />
        </Link>
      </li> 

      </ul>
      </div>

      </div>

      <div className='second-child-section'>
        <div className='second-child-text-section'>
          <p className='p-tag-second-child-text-section'>&copy; 2022,<span className='span-tag-second-child-text-section'>POP FAME .</span> All Rights Reserved</p>

        </div>
        <div className='second-child-social-links-section'>
          <ul className='ul-child-social-links-section'>
            <li className='list-child-social-links-section'>
            <Link className='a-tag-child-social-links-section' to='/'>
              <img src={facebooklogo} alt="logo" className='' />
              </Link>
            </li>
            <li className='list-child-social-links-section'>
            <Link className='a-tag-child-social-links-section' to='/'>
              <img src={instagramlogo} alt="logo" className='' />
              </Link>
            </li> 
            <li className='list-child-social-links-section'>
            <Link className='a-tag-child-social-links-section' to='/'>
              <img src={twitterlogo} alt="logo" className=''/>
              </Link>
            </li>
            <li className='list-child-social-links-section'>
            <Link className='a-tag-child-social-links-section' to='/'>
              <img src={youtubelogo} alt="logo" className=''/>
              </Link>
            </li>
          </ul>

        </div>
      </div>
        <div className='message-component'>
          <img src={messages} alt='ddd' />
        </div>
    </div>
  )
}

export default Footer
