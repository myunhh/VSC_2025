import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import io from 'socket.io-client';
import "./Face.css";

function Face() {
  const navigate = useNavigate();
  const [data, setData] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    const socket = io('http://localhost:5000/', {
      transports: ['websocket'],
    });
    socket.emit('vid');
    socket.on('frame', (frame) => {
      const blob = new Blob([frame], { type: 'image/jpeg' });
      const imgUrl = URL.createObjectURL(blob);
      //console.log(frame);
      if (videoRef.current) {
        videoRef.current.src = imgUrl;
      }
    });
    socket.on('redirect', () => {
      navigate('/place_senior');
    });
    
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className='base'>
      <img className='camDisplay an' ref={videoRef} />
      <h1 className='text'>
        얼굴이 화면에 나오게 서 주세요
      </h1>
    </div>
  );
}

export default Face;
