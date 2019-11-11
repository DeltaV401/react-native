import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Canvas } from 'react-native-canvas';

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
    console.log(color, buttonTitle);
  }
  return (
    <View style={styles.container}>
        <Text style={{...styles.text, color}} name="greeting">Hello, world!</Text>
        <TouchableOpacity style={styles.button} onPress={colorChange}><Text style={styles.buttonText}>{buttonTitle}</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
