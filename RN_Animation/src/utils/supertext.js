/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native'

const Supertext = (props)=>{
    return (
        <Text 
            // style={styles.supertext}
            // {...props} //스타일을 받아와서 표현하기 -> 순서가 뒤에있으므로 오버라이팅됨
            style={[styles.supertext, props.style]}//한가지 요소만 변경하고 싶을 때
        >
            {/* 텍스트를 받아와서 표현하기 */}
            {props.children}
        </Text>
    )
}


const styles = StyleSheet.create({
  supertext :{
    backgroundColor:'skyblue',
    fontSize:25,
    color:'blue',
    padding:15,
    width:300
  }
})


export default Supertext;
