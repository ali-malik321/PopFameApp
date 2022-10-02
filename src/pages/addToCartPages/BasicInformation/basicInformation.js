import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../../assets/globalAssets/POPFAMELOGO.svg"
import { AiOutlineEye } from "react-icons/ai";
import "./basicInformation.css"
import { AiOutlineEyeInvisible } from "react-icons/ai";

const BasicInformation = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(<AiOutlineEyeInvisible />);

    const show = () => {
        type === "password" ? setType("text") : setType("password");
        icon === <AiOutlineEye />
            ? setIcon(<AiOutlineEyeInvisible />)
            : setIcon(<AiOutlineEye />);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(

        )
        navigate('/')

    }


    return (
        <div className='main-cart-section'>
            <div className='child-color-section'>
                <NavLink to='/'><img src={logo} alt="logo" className='side-bar-logo'/></NavLink>

            </div>


            <div class="form-column-div">
                <div>
                    <h1 className='container-h1'>Basic information</h1>
                    <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
                        <p className='front_card-p-tag'>First Name</p>
                        <input
                            type="text"
                            className='user_email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <p className='front_card-p-tag'>Last Name</p>
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

                        <p className='front_card-p-tag'>Number</p>
                        <input
                            type="tel"
                            className='user_email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />



                        <div className='button-div'>
                        <button type='submit' className="next_btn">next</button>
                        </div>
                    </form>


                </div>
            </div>


        </div>

    )
}

export default BasicInformation