import React from 'react'
import Chat from './Chat'
import './Messages.css'
import SideBar from './sideBar'

const Messages = () => {
  return (
    <div className='messagesection-main-div'>
        <div className='messagesection-body'>
            <SideBar/>
            <Chat/>

        </div>
        
    </div>
  )
}

export default Messages