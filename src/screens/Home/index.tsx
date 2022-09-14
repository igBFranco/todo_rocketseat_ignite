import React, { useState } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { Form } from '../../components/Form';
import { styles } from './styles';

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);

  return (
    <View style={styles.container}>
        <View style={styles.logoBox}>
            <Image source={require('../../../assets/Logo.png')} style={styles.logo}/>
        </View>
        <View style={styles.form}>
            <Form/>
        </View>
        <View style={styles.tasks}>
            <View style={styles.labels}>
                <View style={styles.created}>
                    <Text style={styles.textCreated}>
                        Criadas
                    </Text>
                    <View style={styles.createdCounter}>
                        <Text style={styles.counter}>
                            0
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
                    //  <Participant 
                    //      key={item} 
                    //      name={item} 
                    //      onRemove={() => handleParticipantRemove(item)}
                    //  />
                    <Text></Text>
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