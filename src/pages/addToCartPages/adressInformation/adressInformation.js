import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";


const Adressinformation = () => {
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

          </div>


          <div class="form-column-div">
              <div>
                  <h1 className='container-h1'>Basic information</h1>
                  <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
      <select  className='user_email' name="languages" id="lang">
        <option value="select">Select a Category</option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>

                      <p className='front_card-p-tag'>City</p>
                      <input
                          type="text"
                          className='user_email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />

                      <p className='front_card-p-tag'>State</p>
                      <input
                          type="email"
                          className='user_email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />

                      <p className='front_card-p-tag'>Zip</p>
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

export default Adressinformation