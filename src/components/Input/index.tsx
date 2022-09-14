import React from 'react';
import { View, TextInput } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { styles } from './styles';

export function Input() {
    let [fontsLoaded] = useFonts({
        Inter_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
        />
    </View>
  );
}