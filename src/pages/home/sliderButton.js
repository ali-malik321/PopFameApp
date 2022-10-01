import React from 'react'
import { Link } from 'react-router-dom';
import './homePage.css'

const SliderButton = (props) => {

    // const liStyle = {
    //     border: '2px solid green',
    //     display: 'inline-flex',
    //     flex-wrap: 'wrap',
    //     justify-content: 'space-between'
    //     }
   
    
  return (
    <>
    <Link className='slidebtn' to="/" >
    {props.name}
    </Link>
    </>
  )
}



export default SliderButton