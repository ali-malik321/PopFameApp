import React, { Component } from 'react'
import './home.css'
// import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import logoBackground from '../../assets/globalAssets/logoBackground.png'
import { BsArrowRight } from "react-icons/bs";
import { withRouter } from './withRouter'


class Home1 extends React.Component {

  constructor() {
    super()
    this.state = {
      zipCode: "",
    };
  }
  navigation(param) {
    this.props.navigate(param)
  }



  add = (event) => {
    this.setState({
      zipCode: event.target.value

    })
    console.log("zipCode :", this.state.zipCode)

  }


  submit = ( zipCode) => {
    console.log('Submit')
    if (this.state.zipCode ==='54000'){
      console.log("OK!")
      this.setState({
        zipCode: ''
      })
      this.navigation('/services')

    }else{
    this.navigation('/subscribe')
    this.setState({
      zipCode: ''
    })
  }

  }
  render() {


    return (
      <div className='Main-div'>
        <img className='logoBackground' src={logoBackground} alt="logo" />
        {/* form  */}
        <form className='forms' onSubmit={this.submit}>

          <div className="group input_wrap">
            <input className='inputField' type="text"
              value={this.state.zipCode}
              required
              placeholder=" "
              onChange={this.add} />
            <label className='' for="fullName">Enter ZipCode</label>
          </div>
          <button type="button" className="button"
            onClick={() => this.submit(this.state.zipCode)}>
            < BsArrowRight className='svg' />
          </button>

        </form>
      </div>
    )
  }
}
export default withRouter(Home1);
