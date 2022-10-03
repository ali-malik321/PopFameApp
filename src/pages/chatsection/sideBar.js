import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './sidebar.css'
import ChatIcon from "@mui/icons-material/Chat"
import { DonutLarge, MoreVert, SearchOffOutlined } from '@mui/icons-material'
import SideBarChat from './sideBarChat'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <button className='back_button'><ArrowBackIosNewIcon/> Back</button>
 <h3>Messages</h3>
            </div>

            <div className='sidebar_search'>
                <div className='sidebar__searchContainer'>
                    <SearchOffOutlined />
                    <input placeholder='Search...' type="text" name="name" />
                </div>

            </div>
            <div className='sidebar_search_btn_section'>
            <button className='sidebar_search_btn '>All</button>
                <button className='sidebar_search_btn btncolor'>Unread</button>
                </div>

            <div className='sidebar_chats'>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>



            </div>

        </div>
    )
}

export default SideBar