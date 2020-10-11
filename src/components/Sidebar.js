import React from 'react';
import '../styles/Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons'
import SideBarChat from './SideBarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src='https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'/>
                <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder='Search or start a new chat'/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SideBarChat addNewChat />
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
            </div>
        </div>
    )
}

export default Sidebar
