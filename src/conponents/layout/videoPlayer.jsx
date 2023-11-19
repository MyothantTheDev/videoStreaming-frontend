import React from 'react';

const VideoPlayer = ({ videoId }) => {

  const handleContextMenu = (e) => {
    e.preventDefault();
  }

  return (
    <div key={videoId}>
      <video 
        controls 
        style={{width: "100%", height: "100%"}}
        controlsList='nodownload'
        onContextMenu={handleContextMenu}
      >
        <source src={`/api/v1/video/stream?id=${videoId}`} type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoPlayer;