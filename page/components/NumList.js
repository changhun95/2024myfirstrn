import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const NumList = ({data, listDelete}) => {
  return (
    <View style={styles.numList}>
        
        {data.map((item, idx) => {
            return (
              <TouchableOpacity 
              onPress={()=>listDelete(idx)}
              key={idx}>
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            );
          })}

    </View>
    
  )
}

export default NumList

const styles = StyleSheet.create({
    numList:{
        // backgroundColor:'orange',
        paddingHorizontal:16,
    },
    text:{
        paddingHorizontal:16,
        paddingVertical:10,
        backgroundColor:'white',
        marginTop:5,
        borderRadius:10,
    }
})