import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Canvas from 'react-native-canvas';

import { styles } from './styles/app-style';

export default function App() {
  let [color, setColor] = useState('red');
  let [buttonTitle, setButtonTitle] = useState('Turn the text black!');

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

  const canvasDraw = canvas => {
    const ctx = canvas.getContext('2d');
    console.log('Issa here', ctx);
  }

  return (
    <>
      <View style={styles.canvas}><Canvas ref={canvasDraw}/></View>
      <View style={styles.container}>
        <Text style={{...styles.text, color}} name="greeting">Hello, world!</Text>
        <TouchableOpacity style={styles.button} onPress={colorChange}><Text ket="button" style={styles.buttonText}>{buttonTitle}</Text></TouchableOpacity>
      </View>
    </>
  );
}
