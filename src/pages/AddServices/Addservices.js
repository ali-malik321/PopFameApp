import React, { Component } from 'react'
// import logoBackground from '../../assets/globalAssets/logoBackground.png'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import './addservices.css'

export default class Addservices extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      zipcode: '',
      redirect: false

    };
  }
 
  add = (emil) => {
    this.setState({
      zipcode : emil.target.value
      
    })
    console.log("zipCode: ",this.state.zipcode)
  }

  submit = (zipCode) => {
   

    const data = this.state.zipcode
    console.log("data:", data)

    if(data == '54000'){
      console.log("OK!")
    }else{
      console.log("else")
        }
  }

  render() {
    return (
      <div className='Main-div'>
        {/* <img className='logoBackground' src={logoBackground} alt="logo" /> */}
        {/* form  */}
        <form className='forms' onSubmit={this.submit}>

          <div className="group input_wrap">
            <input className='inputField' type="text"
              value={this.state.zipCode}
              required
              placeholder=" "
              onChange={this.add} />
            <label className='' for="fullName">Services</label>
          </div>
          <button type="button" className="button"
            onClick={() => this.submit(this.state.zipCode)}>
            < BsArrowRight className='svg' />
          </button>

        </form>
      </div> )
  
  }
}
