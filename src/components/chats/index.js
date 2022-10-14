import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './index.scss';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { db } from '../../firebase';

function Chats() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }))))
  }, [])

  return (
    <div className='chats'>
      <div className="chats_header">
        <Avatar className='chats_avatar' />
        <div className="chats_search">
          <SearchIcon />
          <input placeholder='Friends' type="text" />
        </div>
        <ChatBubbleIcon  className='chats_chatIcon'/>
      </div>


      <div className="chats_posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat 
            key={id}
            id={id}
            username={username}
            timestamp={timestamp}
            imageUrl={imageUrl}
            read={read}
            profilePic={profilePic}
            />
          )
        )}
      </div>
    </div>
  )
}

export default Chats;