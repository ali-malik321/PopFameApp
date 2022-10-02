import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/useSlice';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible} from "react-icons/ai";



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(<AiOutlineEyeInvisible/>);
  
    const show = () => {
      type === "password" ? setType("text") : setType("password");
      icon === <AiOutlineEye/>
        ? setIcon(<AiOutlineEyeInvisible/>)
        : setIcon(<AiOutlineEye/> );
    };

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
        <div class="container">
  <div class="front_card">
  <h1 className='container-h1'>Log in</h1>   
    <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
                <p className='front_card-p-tag'>Email Address</p>
                <input
                    type="email"
                    className='user_email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                    <p className='front_card-p-tag'>Password</p>
                    <div className='password-input-div'>
                <input
                    type={type}
                    class="user_password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    <i className='eye-icon' onClick={show}>{icon}</i>
                    </div>
                    <Link className='forgetpasword-link' to='/'>Forgot Password?</Link>

      <button type='submit' className="login_btn">Log in</button>
            </form>
            <h3 class="hr-lines"> OR </h3>


            <p className='Register-p-tag'>Not a User <Link className='registeration-link' to='/signup'>Register</Link> From Email</p>
  </div>
    
</div>

    )
}


export default Login