import React, { useState } from 'react';
import { View, Image, Text, FlatList, Alert, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Task } from '../../components/Task';
import { styles } from './styles';

export function Home() {
    const [tasks, setTasks] = useState<string[]>(['teste']);
    const [taskData, setTaskData] = useState('');

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, taskData]);
        setTaskData('');
    }
    function handleTaskRemove(data: string) {
        Alert.alert("Remover", `Deseja remover a tarefa ?`, [
            {
                text: "Sim",
                onPress: () => setTasks(prevState => prevState.filter(task => task !== data))
            },
            {
                text: "Não",
                style: 'cancel'

            }
        ])
    }

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.container}>
        <View style={styles.logoBox}>
            <Image source={require('../../../assets/Logo.png')} style={styles.logo}/>
        </View>
        <View style={styles.form}>
            <View style={styles.formContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setTaskData}
                    value={taskData}
                />
                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Image source={require('../../../assets/plus.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.tasks}>
            <View style={styles.labels}>
                <View style={styles.created}>
                    <Text style={styles.textCreated}>
                        Criadas
                    </Text>
                    <View style={styles.createdCounter}>
                        <Text style={styles.counter}>
                            {tasks.length}
                        </Text>
                    </View>
                </View>
                <View style={styles.finished}>
                    <Text style={styles.textFinished}>
                        Concluídas
                    </Text>
                    <View style={styles.finishedCounter}>
                        <Text style={styles.counter}>
                            0
                        </Text>
                    </View>
                </View>
            </View>
            <FlatList
                 data={tasks}
                 keyExtractor={item => item}
                 renderItem={({ item }) => (
                     <Task 
                         key={item} 
                         data={item} 
                         onRemove={() => handleTaskRemove(item)}
                         confirm={() => handleTaskRemove(item)}
                     />
                 )}
                 showsVerticalScrollIndicator={false}
                 ListEmptyComponent={() => (
                    <View>
                        <View style={styles.line}/>  
                        <View style={styles.emptyList}>
                            <Image source={require('../../../assets/Clipboard.png')} style={styles.emptyListIcon}/>
                            <Text style={styles.listEmptyTextBold}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listEmptyText}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    </View>
                 )}
            />
        </View>
    </View>
  );
}