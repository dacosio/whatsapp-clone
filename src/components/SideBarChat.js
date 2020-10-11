import React, { useEffect, useState } from 'react'
import '../styles/SideBarChat.css';
import {Avatar, IconButton} from '@material-ui/core';
import db from '../firebase';
import { Link } from 'react-router-dom';

const SideBarChat = ({addNewChat, id, name}) => {
    const [seed, setSeed] = useState('');

    const createChat = () => {
      const roomName = prompt("Please enter name for chat room");

      if (roomName){
        db.collection('rooms').add({
          name: roomName,
        })
      }
    };

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return !addNewChat ?  (
        <Link to={`${id}`}>
          <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last seen...</p>
            </div>
        </div>
        </Link>
    ) : (
      <div onClick={createChat} className="sidebarChat">
        <h2>Add new chat</h2>
      </div>
    )
}

export default SideBarChat
