import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
            <Image source={require('../../../assets/Logo.png')}/>
        </View>
        <View style={styles.tasks}>
            <Form/>

        </View>
    </SafeAreaView>
  );
}