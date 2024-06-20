import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import IconButton from '../IconButton';
import Icons from '../Icons';

const Task = ({item, deleteTask, checkCompleted, updateTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _onSubmit = () => {
    setIsEditing(false);
    updateTask(item.id, text);
  };

  return isEditing ? (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        onSubmitEditing={_onSubmit}
        onBlur={_onSubmit}
        autoFocus={true}
      />
    </>
  ) : (
    <View style={styles.content}>
      <IconButton
        icon={item.completed ? Icons.checking : Icons.unchecking}
        onPress={() => checkCompleted(item.id)}
      />
      <Text style={{flex: 1}}>{item.text}</Text>
      {item.completed || (
        <IconButton icon={Icons.xiugai} onPress={() => setIsEditing(true)} />
      )}
      <IconButton icon={Icons.trash} onPress={() => deleteTask(item.id)} />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: 'lightgray',
  },
});
