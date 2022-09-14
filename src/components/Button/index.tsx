import React from 'react';
import {TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export function Button() {
  return (
    <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/plus.png')} style={styles.icon}/>
    </TouchableOpacity>
  );
}