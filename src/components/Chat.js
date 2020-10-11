import { Avatar, IconButton } from '@material-ui/core'
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, {useState} from 'react'
import '../styles/Chat.css'
import { useParams } from 'react-router-dom';
const Chat = () => {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const { roomId } = useParams();

    const sendMessage = e => {
      e.preventDefault();
      setInput('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                  <h3>Room name</h3>
                  <p>Last seen...</p>
                </div>
                <div className="chat__headerRight">
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                  <IconButton>
                    <AttachFile />
                  </IconButton>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </div>
            </div>

            <div className="chat__body">
              <p className={`chat__message ${false && "chat__receiver"}`}>
                <span className="chat__name">Don Cosio</span>
                Hey guys
                <span className="chat__timestamp"> 3:52pm</span>
              </p>
            </div>

            <div className="chat__footer">
              <InsertEmoticonIcon />
              <form>
                <input value={input} onChange={e=> setInput(e.target.value)} type="text" placeholder="Type a message"/>
                <button type="submit" onClick={sendMessage}>Send a message</button>
              </form>
              <MicIcon />
            </div>
        </div>
    )
}

export default Chat
