/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

class App extends Component {
  state ={
    avatar: ''
  }
  addImage = () => {
    //카메라 구동하기
    // ImagePicker.launchCamera({}, response=>{
    //저장한 이미지 가져오기
    // ImagePicker.launchImageLibrary({}, response=>{
    
    //카메라 구동하거나 저장한 이미지 가져오기
    ImagePicker.showImagePicker({
      title:'Choose your Photo',
      takePhotoButtonTitle:'사진 찍기',
      chooseFromLibraryButtonTitle: '앨범에서 불러오기',
      cancelButtonTitle: '취소'
    }, response=>{
        this.setState({
        avatar: response.uri
      })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={{uri:this.state.avatar}}
          style={styles.avatar}
        />

        <Button
          title="Add an Image"
          onPress={()=> this.addImage()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e4ab26'
  },
  avatar:{
    width:'100%',
    height:400
  }
})

export default App;