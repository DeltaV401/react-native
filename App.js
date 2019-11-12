import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Canvas from 'react-native-canvas';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { styles } from './styles/app-style';

export default function App() {
  let [color, setColor] = useState('red');
  let [buttonTitle, setButtonTitle] = useState('Turn the text black!');
  let canvasEl = useRef(null);

  if (canvasEl.current) {
    const ctx = canvasEl.current.getContext('2d');
    ctx.fillStyle = 'green';

    let x0 = Math.floor(Math.random() * 200);
    let y0 = Math.floor(Math.random() * 200);
    let x1 = Math.floor(Math.random() * 200);
    let y1 = Math.floor(Math.random() * 200);
    let random = randArray(4);

    ctx.clearRect(0,0,400,400);
    ctx.fillRect(...random);
  }

  function randArray(length) {
    let res = [];
    for (var i = 0; i < length; i++) {
      res.push(20 + Math.floor(Math.random() * 180));
    }
    return res;
  }


  const colorChange = e => {
    e.preventDefault();
    if(color === 'red') {
      setColor('black');
      setButtonTitle('Turn the text red!');
    } else {
      setColor('red');
      setButtonTitle('Turn the text black!');
    }
  }

  return (
    <>
      <View style={styles.canvas}><Canvas ref={canvasEl}/></View>
      <View style={styles.container}>
        <Text style={{...styles.text, color}} name="greeting">Hello, world!</Text>
        <TouchableOpacity style={styles.button} onPress={colorChange}><Text ket="button" style={styles.buttonText}>{buttonTitle}</Text></TouchableOpacity>
      </View>
    </>
  );
}