/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, Platform, StyleSheet,View, Text } from 'react-native'
import AnimOne from './src/Animation01'
import AnimTwo from './src/Animation02'
import Supertext from './src/utils/supertext'
import DeviceInfo from 'react-native-device-info';
// import { getUniqueId, getManufacturer } from 'react-native-device-info';'

//component = 재사용 가능한 템플릿을 만든다
class App extends Component {
  functionA = () => {
    if (Dimensions.get('window').fontScale === 1) {
      console.warn('Good')
    } else {
      console.warn('Bad')

    }
  }
  checkSupport = () => {
    if (Platform.OS === 'ios'){
      if (Platform.Version < 13.6){
        return false
      }
    } else{
      if (Platform.Version < 27){
        return false
      }
    }
    return true
  }


  render() {
    //화면전체
    // console.warn(Dimensions.get('screen'))
    //메뉴바 제외한 크기
    // console.warn(Dimensions.get('window'))
    console.warn(DeviceInfo.getBrand())
    console.warn(DeviceInfo.isTablet())

    return (
      <View style={styles.container}>
        {/* {
          this.checkSupport() ?
          <Supertext
            // style={{backgroundColor:'red'}}
            style={styles.div}
          >

            {
              Platform.OS === 'ios'?
                '아이폰이네요'
              :
                '안드로이드이네요'
            }
          </Supertext>
        :
          <Text>
            지원하지 않습니다.
          </Text>
        } 
      */}
        {this.functionA()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#bbb',
    alignItems:'center',
    justifyContent:'center',
  },
  div: {
    ...Platform.select({
      ios: {
        backgroundColor:'skyblue'
      },
      android: {
        backgroundColor:'yellow'
      }
    })
  }
})


export default App;
