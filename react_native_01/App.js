/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import Hi2 from './assets/images/desktop.jpg'
import Modal from'./src/modal'


//modal : 화면 가장 위에 표시 될 레이아웃
class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        {/* <Image 
          style={styles.image}
          source={{uri: 'https://picsum.photos/id/237/200/300'}}
          resizeMode='contain'
          onLoadEnd={()=>alert('image Loaded!')}
        /> */}
        <Modal />

      </View>
    )
  } 
}



const styles = StyleSheet.create({
  mainView:{
    flex:1, //다른 flex가 3이라면 1/4 차지
    backgroundColor:'white',
    paddingTop:50,
    alignItems:'center',
    // justifyContent:'c1₩enter'
  },
  image:{
    width:'100%',
    height: 300,
  },
})



export default App;