import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/useSlice';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./signup.css"

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<AiOutlineEyeInvisible />);
  const [agree, setAgree] = useState(false);


  const show = () => {
    type === "password" ? setType("text") : setType("password");
    icon === <AiOutlineEye />
      ? setIcon(<AiOutlineEyeInvisible />)
      : setIcon(<AiOutlineEye />);
  };

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    )
    navigate('/')

  }

  return (
    <div class="container-signup">
      <div class="front_card">
        <h1 className='container-h1'>User Sign Up</h1>
        <form className='signup_form' onSubmit={(e) => handleSubmit(e)}>
          <div>
            <p className='front_card-p-tag'>First Name</p>
            <input
              type="text"
              className='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <p className='front_card-p-tag'>Number</p>
            <PhoneInput
              country={'us'}
              value="text"
            />
            <p className='front_card-p-tag'>Password</p>

            <div className='password-input-div'>

              <input
                type={type}
                class="user_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <i className='eye-icon' onClick={show}>{icon}</i>
            </div>

          </div>
          <div>
            <p className='front_card-p-tag'>First Name</p>
            <input
              type="text"
              className='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <p className='front_card-p-tag'>Email</p>
            <input
              type="email"
              className='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <p className='front_card-p-tag'>Confirm Password</p>

            <div className='password-input-div2'>

              <input
                type={type}
                class="user_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <i className='eye-icon' onClick={show}>{icon}</i>
            </div>
          </div>

        </form>
        <div className='agree-div'>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> I agree to <span className='spantermandcondition'>terms</span> and<span className='spantermandcondition'> conditions</span></label>
        </div>

        <button type='submit' className="login_btn signup">Log in</button>

        <p className='Register-p-tag'>Already a user ? <Link className='registeration-link' to='/'>Login</Link></p>
      </div>

    </div>

  )
}

export default Signup