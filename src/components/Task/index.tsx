import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

type Props = {
    data: string;
    confirm: () => void;
    onRemove: () => void;
}

export function Task({ data, onRemove, confirm }: Props) {
  const [strikethrought, setStrikethrought] = useState(false);

  const taskDone = () => {
    setStrikethrought(!strikethrought);
    confirm();
  };

  return (
    <View style={styles.container}>
        <Checkbox
          value={strikethrought}
          onValueChange={taskDone}
          color="#4ea8de"
          style={styles.checkbox}
        />
        <Text style={strikethrought ? styles.dataCrossed : styles.data}>
           {data}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Image source={require('../../../assets/trash.png')} style={styles.icon}/>
        </TouchableOpacity>
      </View>
  );
}