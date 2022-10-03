import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"
import cleaner from "../../assets/globalAssets/cleaner.svg"

const SideBarChat = () => {
  return (
    <div className='sidebarChat'>
        <img src={cleaner} alt='ddd'></img> 
        <div className='sideChat__info'>
         <h3>Jack Martin</h3>
         <p>last message...</p>
        </div>
        <div className='sidebarChat__time'>
            <p>11:30</p>
        </div>
        </div>
  )
}

export default SideBarChat