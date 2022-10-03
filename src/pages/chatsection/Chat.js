import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chat.css'
import { DonutLarge, InsertEmoticon, Mic, MoreVert } from '@mui/icons-material'
import ChatIcon from "@mui/icons-material/Chat"
import cleaner from "../../assets/globalAssets/cleaner.svg"
import emoji from "../../assets/globalAssets/smileemoji.svg"
import fileextension from "../../assets/globalAssets/fileextension.svg"





const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <img src={cleaner} alt='' />
                <div className='chat__headerInfo'>

                    <h3>Jack Martin</h3>
                    <p>Cleaner</p>
                </div>

                <div className='chat__headerRight'>


                    <IconButton>
                        <MoreVert />
                    </IconButton>


                </div>

            </div>
            <div className='chat__body'>
                <div className='message-section'>
                    <p className='chat__message chat_reciever'>

                        hey Gyesssssss
                    </p>
                    <span className='chat_name span_chat_date'>3 days ago</span>

                </div>

                <div className='message-section'>
                    <div className='img_and_chat_div'>
                <img src={cleaner} alt='ddd' />
                    <p className='chat__message'>

                    Hi, I am bit tight on my budget
                    </p>
                    </div>
                    <span className='chat_name'>3 days ago</span>

                </div>


            </div>

            <div className='chat_footer'>
                <form>
                    <input type="text" />
                    <img src={emoji} alt='' />

                    <img src={fileextension} alt='' />

                </form>
                <button className='chat_footer_button'>Send</button>

            </div>


        </div>
    )
}

export default Chat