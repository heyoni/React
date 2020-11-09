/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


class Input extends Component {
    state= {
        myTextInput:''
    }

    //입력된 텍스트를 계속 업데이트 시켜주느 함수
    //event라는 인자를 받아올건데, 여기에 변경되는 값들이 들어가고 이 함수 안에는
    //setState를 통해서 myTextInput을 업데이트 시켜줄것
    onChangeInput = (event) =>{
        this.setState({
            myTextInput:event
        })
    }
    render() {
        return (
            <View style={styles.mainView}>
                <TextInput
                    //textInput의 입력값을 받아오는 프로퍼티 
                    value={this.state.myTextInput}
                    style={styles.input}
                    //텍스트 변경시 실행되는 이벤트 설정하기
                    onChangeText={this.onChangeInput}
                    
                    //개행
                    multiline={true}
                    //글자수 제한
                    maxLength={30}
                    //첫글자 대문자 자동수정->none이 없음
                    autoCapitalize={'none'}
                    //텍스트 입력을 잠금
                    editable={true}
                />
            </View>
    )
  } 
}

const styles = StyleSheet.create({
    mainView:{
        width:'100%',
    },
    input:{
        width:'100%',
        backgroundColor:'#cecece',
        marginTop:20,
        fontSize:25,
        padding:10,
    }

})

export default Input;