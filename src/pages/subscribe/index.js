import React, { Component, useState } from 'react'
import './Subscribe.css'
// import logoBackground from '../../assets/globalAssets/logoBackground.png'

export default class index extends Component {

  constructor() {
    super()
  this.state = {
    zipCode: "",
  };
}


navigation() {
  this.props.navigate('/subscribe')
}


add = (event) => {
  this.setState({
    zipCode: event.target.value

  })
}

  render() {
    return (
      <div className='div'>
        {/* <img className='logoBackground' src={logoBackground} alt="logo" /> */}

        <div className='subscribeDiv'>
          <p>Sorry! we are not providing services in your area.</p>
          <div className="group input_wrap">
            <input className='inputField' type="text" id="fullName" name="fullName"  value={this.state.zipCode} placeholder=" " onChange={this.add} />
            <label for="fullName">Your Email</label>
          </div>
          <button class="custom-btn btn-5"><span>Subscribe</span></button>
        </div>
        
      </div>
    )
  }
}
