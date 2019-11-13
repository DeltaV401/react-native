import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Canvas from 'react-native-canvas';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { styles } from './styles/app-style';

let locationSettings = {
  accuracy: Location.Accuracy.Balanced,
}

export default function App() {
  let [color, setColor] = useState('red');
  let [buttonTitle, setButtonTitle] = useState('Turn the text black!');
  let [permission, setPermission] = useState(null);
  let [location, setLocation] = useState({});

  let canvasEl = useRef(null);

  if (canvasEl.current) {
    const ctx = canvasEl.current.getContext('2d');
    ctx.fillStyle = 'green';

    let x0 = 50;
    let y0 = 50;
    let x1 = (Math.ceil(location.latitude) - location.latitude) * 100000000000000;
    let y1 = (Math.ceil(location.longitude) - location.longitude) * 100000000000000;

    ctx.fillRect(x0, y0, x1, y1);
  }

  const colorChange = e => {
    e.preventDefault();
    Location.getCurrentPositionAsync(locationSettings)
      .then(location => {
        setLocation({...location.coords});
      });
    if(color === 'red') {
      setColor('black');
      setButtonTitle('Turn the text red!');
    } else {
      setColor('red');
      setButtonTitle('Turn the text black!');
    }
  }

  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => {
        console.log('Permission check', status);
        setPermission(status === 'granted');
      })
  }, []);

  useEffect(() => {
    if(permission) {
      Location.getCurrentPositionAsync(locationSettings)
        .then(location => {
          setLocation({...location.coords});
        });
    }
  }, [permission]);

  return (
    <>
      <View style={styles.canvas}><Canvas ref={canvasEl}/></View>
      <View style={styles.container}>
        <Text style={{...styles.text, color}} name="greeting">Latitude: {location.latitude}, Longitude: {location.longitude}</Text>
        <TouchableOpacity style={styles.button} onPress={colorChange}><Text ket="button" style={styles.buttonText}>{buttonTitle}</Text></TouchableOpacity>
      </View>
    </>
  );
}