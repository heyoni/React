/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// 리엑트 네비게이션을 사용하기 위해서는 네비게이션 컨테이너라는 태그에 감싸줘야함
// 그전에 임포터해줘야 하는 요소들임 
// 네비게이션 컨테이너 : 네비게이션 구조, 상태를 관리하기 위한 컴포넌트
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/home';
import USerScreen from './src/user';
import UserScreen from './src/user';


// 스크린, 네비게이터를 리턴하는 프로퍼티
// 랜딩하는 부분에서 stack.screen으로 사용함
const Stack = createStackNavigator();


class App extends Component {
  render() {
    return(
      <NavigationContainer>
        {/* Stack이 createStackNavigator이기 때문에 stack.으로 사용할 수 있음 */}
        {/* 이 태그는 Navigator 로 동작 될 태그 */}
        <Stack.Navigator>
          {/* 이 태그는 Screen 로 동작 될 태그 */}
          {/* name:맨위 탭에 생기는 탭 이름, component:표기할 내용이 들어갈 홈페이지 */}
          <Stack.Screen name='home' component={HomeScreen}/>
          <Stack.Screen name='user' component={UserScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
