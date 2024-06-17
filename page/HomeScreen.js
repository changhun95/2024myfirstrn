import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Myimage from '../assets/image/img1.png'
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image source={Myimage} style={{width:'100%'}}/>
      <Button title='go Profile' onPress={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        gap:10,
        justifyContent:'center',
        paddingHorizontal:16
    }
})