import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const IconButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchPad}>
      <View>
        <Image source={icon} style={{width: 30, height: 30}} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  touchPad: {
    width: 30,
    height: 30,
    margin: 5,
  },
});
