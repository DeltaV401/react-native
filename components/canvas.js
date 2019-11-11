import React from 'react';
import { Canvas } from 'react-native-canvas';

export default function CanvasBoard() {
  const handleCanvas = canvas => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(0,0,100,100);
  }
  return (
    <Canvas ref={handleCanvas}/>
  )
}