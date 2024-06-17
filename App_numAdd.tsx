import {Alert, Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Header from './page/components/Header';
import Generator from './page/components/Generator';
import NumList from './page/components/NumList';

const App = () => {
  const [mainTitle, setMainTitle] = useState('my world');
  const [random, setRandom] = useState([100, 99]);

  const pressView = () => {
    alert('view');
  };
  const onAddRandom = () => {
    // Alert.alert('add');
    const randomNum = Math.floor(Math.random() * 100) + 1; // 0~1사이 값이 나오니까 0.111.. 이런식으로나오는건데, *100하고 +1해서 1~100사이의 숫자를 구함
    // alert(randomNum);
    setRandom(prevRandom => [...prevRandom, randomNum]);    
    }
    const onChangeText=(text)=>{
      console.log(text)
    }
    const listDeleteNum = (delNum)=>{
      const newArray = random.filter((num,index)=>{
        return delNum != index
      })
      setRandom(newArray)
  };
  return (
    //View가 div? Text가 span태그?
    <View style={styles.container}>
      <Header title={mainTitle} onPressView={pressView} />

      {/* <View style={styles.btnCon}>
        <Button title="test" />
        <Button title="test" />
      </View>
      <Text>App</Text> */}
      <View style={styles.inputWrap}>

      <TextInput style={styles.input}
      onChangeText={onChangeText}
      // maxLength={3}
      // multiline={true}
      returnKeyType='done'
      />
      </View>
      <ScrollView>
      <Generator add={onAddRandom} />

      <NumList data={random} listDelete={listDeleteNum}/>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },

  btnCon: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  input:{
    width:'100%',
    backgroundColor:'#efefef',
    marginHorizontal:16,
    borderRadius:10
  },
  inputWrap:{
    width:'100%',
    paddingHorizontal:16,
    marginTop:10
  }
});
export default App;
