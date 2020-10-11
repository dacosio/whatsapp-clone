import React, { useEffect, useState } from 'react'
import '../styles/SideBarChat.css';
import {Avatar, IconButton} from '@material-ui/core';

const SideBarChat = ({addNewChat}) => {
    const [seed, setSeed] = useState('');

    const createChat = () => {
      const roomName = prompt("Please enter name for chat");

      if (roomName){

      }
    };

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return !addNewChat ?  (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last seen...</p>
            </div>
        </div>
    ) : (
      <div onClick={createChat} className="sidebarChat">
        <h2>Add new chat</h2>
      </div>
    )
}

export default SideBarChat
