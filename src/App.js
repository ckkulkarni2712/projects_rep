import './App.css';
import React, { useState, useEffect } from 'react'
import axios from './components/axios'
import Video from './components/Video';

// Initialize Firebase
function App() {
  const [videos, setVideos] = useState([])
  useEffect(()=> {
    async function fetchData() {
      const res = await axios.get("/v2/posts")
      setVideos(res.data)
      return res
    }
    fetchData()
  },[])
  return (
    <div className="App">
      <div className='app_videos'>
        {videos.map(({ url, channel, description, song, likes, shares, messages }) => (
          <Video
            key={url}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
            />
      
          
        ))}
        
        
        
        {/* <Video url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="ckkulkarni2712"
          description="This is the remix of the original song 1"
          song="OG Song 101"
          likes={200}
          shares={100}
          messages={120 } />
        
          <Video url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="ckkulkarni2712"
          description="This is the remix of the original song 2"
          song="OG Song 102"
          likes={210}
          shares={700}
          messages={123} /> */}
      </div>
    </div>
  );
}

export default App;
