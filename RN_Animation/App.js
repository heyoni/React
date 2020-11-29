/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native'
import AnimOne from './src/Animation01'
import AnimTwo from './src/Animation02'
import Supertext from './src/utils/supertext'

//component = 재사용 가능한 템플릿을 만든다
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text> 컴포넌트 만들기 </Text> */}
        {/* <AnimTwo/> */}

        {/* 이 화면에서만 스타일을 다르게 주고 싶은 경우 */}
        <Supertext
          style={{backgroundColor:'red'}}
        >
          템플릿 입니다2.
        </Supertext>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor:'#bbb',
    alignItems:'center',
    justifyContent:'center',
  }
})


export default App;
