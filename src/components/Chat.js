import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import './Chat.css'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic'
import db from '../firebase'
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import firebase from 'firebase'

const Chat = () => {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const { roomId } = useParams()
    const [roomName, setRoomName] = useState('')
    const [messages, setMessages] = useState([])
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));

            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot(snapshot => {
                    setMessages(snapshot.docs.map(doc => doc.data()))
                });
        }
    },[roomId])
    
    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])
    const sendMessage = e => {
        e.preventDefault()
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
  return (
      <div className='chat'>
          <div className='chat_header'>
              <Avatar src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`} />
              <div className='chat_headerInfo'>
                <h3 className='chat-room-name'>{roomName}</h3>
                  <p className='chat-room-last-seen'> Last online at {" "}
                      {new Date(
                          messages[messages.length - 1]?.
                              timestamp?.toDate()).
                          toUTCString()}</p>
             </div>
          
          <div className='chat_headerRight'>
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
          <div className='chat_body'>
              {messages.map(message => (
                  <p className={`chat_message ${message.name === user.displayName &&
                      'chat_receiver'}`}>
                    <span className='chat_name'>{message.name}</span>
                    {message.message}
                    <span className='chat_timestamp'>
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
            </p>
              ))}
              {/* <p className='chat_message'>
                  <span className='chat_name'>yami27</span>
                  Hope y'all are good!
                  <span className='chat_timestamp'>
                      {new Date().toLocaleTimeString()}
                  </span>
            </p> */}
          </div>
          <div className='chat_footer'>
              <InsertEmoticon />
              <form>
                  <input
                      value={input}
                      onChange={e=>setInput(e.target.value)}
                      placeholder='Type a message'
                      type="text"
                  />
                  <button onClick={sendMessage} type='submit'>Send a message</button>
              </form>
              <MicIcon />
          </div>
    </div>
  )
}

export default Chat