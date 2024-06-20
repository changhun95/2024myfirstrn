import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({onChangeText, todoText}) => {
  const onChangeInput = text => {
    onChangeText(text);
  };
  return (
    <View>
      <>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInput}
          autoCapitalize="none"
          maxLength={30}
          value={todoText}
        />
      </>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gainsboro',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});
