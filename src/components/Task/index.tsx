import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

type Props = {
    data: string;
    confirm: () => void;
    onRemove: () => void;
}

export function Task({ data, onRemove, confirm }: Props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.radio} onPress={confirm}>
        </TouchableOpacity>
        <Text style={styles.data}>
           {data}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Image source={require('../../../assets/trash.png')} style={styles.icon}/>
        </TouchableOpacity>
      </View>
  );
}