/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
  render() {
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
          <Text>home screen</Text>
          <Button 
            title="user screen으로 이동하기"
            //터치이벤트
            onPress={()=>{
                //콜백함수
                // 네비게이션에 있는 네비게이트라는 함수를 호출함
                //App.js에서 Stack 변수는
                // 스크린이라는 프로퍼티를 리턴할 때 스크린 컴포넌트를 명시해주는데,
                // 네비게이션 prop을 이 각각의 스크린 컴포넌트에 넘겨주게되고
                // 따라서 스크린 컴포넌트에서는 this.prop를 이용해서 네비게이션 프롭을 사용할 수 있는거고
                // navigation prop에 정의된 네비게이트 함수를 호출할 수 있는것

                this.props.navigation.navigate('user')//App.js에서 정의한 name값을 인자로 넣어줌

            }}
          />
        </View>
    )
  }
}

export default HomeScreen;
