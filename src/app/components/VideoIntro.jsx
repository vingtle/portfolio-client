import React, { useEffect } from "react";
import "./VideoIntro.css";

const VideoIntro = ({ onVideoEnd }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onVideoEnd();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onVideoEnd]);
  
  return (
    <div className="video-container">
      <video
        autoPlay
        muted
        playsInline
        onEnded={onVideoEnd}
        className="intro-video"
      >
        <source src="/test2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoIntro;
