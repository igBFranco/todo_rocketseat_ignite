import React, { useEffect, useState } from 'react';
import { View, Image, Text, FlatList, Alert, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import uuid from 'react-native-uuid';
import { Task } from '../../components/Task';
import { styles } from './styles';

export type Task = {
    data: string;
    status: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskData, setTaskData] = useState('');
    const [created, setCreated] = useState(0);
    const [finished, setFinished] = useState(0);

    useEffect(() => {
        setCreated(tasks.length);
        setFinished(tasks.filter(task => task.status).length);
    }, [tasks]);

    function handleTaskAdd() {
        const newTask = {data: taskData, status: false};
        setTasks(prevState => [...prevState, newTask]);
        setTaskData('');
    }
    function handleTaskRemove(data: string) {
        Alert.alert("Remover", `Deseja remover a tarefa ?`, [
            {
                text: "Sim",
                onPress: () => setTasks(prevState => prevState.filter(task => task.data !== data))
            },
            {
                text: "Não",
                style: 'cancel'

            }
        ])
    }
    function handleTaskConfirm(data: string) {
        setTasks((prevstate)=> {
            const task = prevstate.find((task) => task.data === data);
            if (task) {
              task.status = !task.status;
              return [...prevstate];
            }
            return prevstate;
          })
        
    }

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
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
                            {created}
                        </Text>
                    </View>
                </View>
                <View style={styles.finished}>
                    <Text style={styles.textFinished}>
                        Concluídas
                    </Text>
                    <View style={styles.finishedCounter}>
                        <Text style={styles.counter}>
                            {finished}
                        </Text>
                    </View>
                </View>
            </View>
            <FlatList
                 data={tasks}
                 keyExtractor={item => item.data}
                 renderItem={({ item }) => (
                     <Task 
                         key={item.data} 
                         data={item.data} 
                         onRemove={() => handleTaskRemove(item.data)}
                         confirm={() => handleTaskConfirm(item.data)}
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