/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet,View, Text } from 'react-native'
import AnimOne from './src/Animation01'
import AnimTwo from './src/Animation02'
import Supertext from './src/utils/supertext'

//component = 재사용 가능한 템플릿을 만든다
class App extends Component {
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
    console.warn(Platform.Version)
    return (
      <View style={styles.container}>
        {
          this.checkSupport() ?
          <Supertext
            // style={{backgroundColor:'red'}}
            style={styles.div}
          >
            {/* 템플릿 입니다2. */}
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
