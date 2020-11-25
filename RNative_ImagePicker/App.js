/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, PermissionsAndroid, StyleSheet, View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Contacts from 'react-native-contacts'

class App extends Component {
  // state ={
  //   avatar: ''
  // }
  // addImage = () => {
  //   //카메라 구동하기
  //   // ImagePicker.launchCamera({}, response=>{
  //   //저장한 이미지 가져오기
  //   // ImagePicker.launchImageLibrary({}, response=>{
    
  //   //카메라 구동하거나 저장한 이미지 가져오기
  //   ImagePicker.showImagePicker({
  //     title:'Choose your Photo',
  //     takePhotoButtonTitle:'사진 찍기',
  //     chooseFromLibraryButtonTitle: '앨범에서 불러오기',
  //     cancelButtonTitle: '취소'
  //   }, response=>{
  //       this.setState({
  //       avatar: response.uri
  //     })
  //   })
  // }
  
  getContacts = () => {
    //연락처를 가져올 권한이 있는지 확인해주는 함수
    this.requestContactPermission()
    .then((didGetPermission)=>{
      if(didGetPermission) {
        Contacts.getAll((err, contacts)=>{
          if(err){
            throw err;
          }
          console.warn(contacts)
        })
      }else{
        alert('권한이 없습니다.')
      }
    })
  }

  //async await 비동기함수로 작성함
  //안드로이드 권한요청 정책이 강화되어 추가하는 함수
  async requestContactPermission() {
    if(Platform.OS === 'ios'){
      console.warn('iOS')
      return true
    } else {
      console.warn('Android')

      const granted = await PermissionsAndroid.reqestMultiple([
        PermissionsAndroid.PERMISSONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSONS.READ_CONTACTS,
      ]);

      if(
        granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        return ture
      } else{
        return false
      }
    }
  }


  render() {
    return (
      <View style={styles.container}>
        {/* <Image 
          source={{uri:this.state.avatar}}
          style={styles.avatar}
        />

        <Button
          title="Add an Image"
          onPress={()=> this.addImage()}
        /> */}
        <Button
          title="연락처 불러오기"
          onPress={()=> this.getContacts()}
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