import {Alert, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import IconButton from './page/IconButton';
import Icons from './page/Icons';
import Input from './page/components/Input';
import Task from './page/components/Task';

const App = () => {
  const todoData = [
    {id: '1', text: 'react', completed: false},
    {id: '2', text: 'react-native', completed: true},
    {id: '3', text: 'pdf', completed: false},
  ];
  const [todos, setTodos] = useState(todoData);
  const [todoText, setTodoText] = useState('');
  const onChangeText = (text: string) => {
    setTodoText(text);
  };
  const addTodo = () => {
    if (todoText.trim()) {
      const ID = Date.now().toString();
      const newTaskObject = {id: ID, text: todoText, completed: false};
      console.log(newTaskObject);
      setTodos([...todos, newTaskObject]);
      setTodoText('');
    }
  };
  const checkCompleted = (itemId: string) => {
    setTodos(
      todos.map(item =>
        item.id === itemId ? {...item, completed: !item.completed} : item,
      ),
    );
  };
  const deleteTask = (itemId: string) => {
    setTodos(todos.filter(task => task.id != itemId));
  };
  const updateTask = (itemId, newContent) => {
    setTodos(
      todos.map(item =>
        item.id === itemId ? {...item, text: newContent} : item,
      ),
    );
  };
  return (
    <View>
      <Text style={styles.title}>오늘 할 일</Text>
      <View style={{paddingHorizontal: 16, marginTop: 10, gap: 10}}>
        <Input onChangeText={onChangeText} todoText={todoText} />
        <Button title="할 일 추가" color={'dimgray'} onPress={addTodo} />
        <ScrollView>
          {[...todos].reverse().map(item => (
            <Task
              key={item.id}
              item={item}
              deleteTask={deleteTask}
              checkCompleted={checkCompleted}
              updateTask={updateTask}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'darkgray',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
