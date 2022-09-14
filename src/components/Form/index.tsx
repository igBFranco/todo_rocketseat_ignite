import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button';
import { Input } from '../Input';

import { styles } from './styles';

export function Form() {
  return (
    <View style={styles.container}>
        <Input></Input>
        <Button></Button>
    </View>
  );
}