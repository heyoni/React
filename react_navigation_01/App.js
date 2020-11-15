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

//route : home(홈스크린을 컴포넌트로 갖는 홈루트), user(유저스크린을 컴포넌트로 갖는 유저루트)
//현재는 home이 먼저 작성되어 있기 때문에 홈이 제일 먼저 띄워지나,
//userScreen을 먼저 띄우고 싶다면 Navigator 옆에 initialRouteName ="user"로 주면 됨
class App extends Component {
  render() {
    return(
      <NavigationContainer>
        {/* 모든 화면에서 스타일 설정해주기 */}
        {/* 공통적으로 지정해도 다른 페이지에서 따로 설정해주면 그 설정이 우선적용됨 */}
        <Stack.Navigator 
          initialRouteName='home'
          screenOptions={{
            headerStyle:{
                backgroundColor: '#a4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
              color: '#f3d612'
            }
          }}
        >
          {/* 이 태그는 Screen 로 동작 될 태그 */}
          {/* name:맨위 탭에 생기는 탭 이름, component:표기할 내용이 들어갈 홈페이지 */}
          
          {/* 헤더바 이름 변경하기 */}
          <Stack.Screen 
            name='home' 
            component={HomeScreen}
            options={{title:'홈 화면'}}
          />
          <Stack.Screen 
            name='user'
            component={UserScreen}
            //루트 생성시 파라미터를 초기화 하는 방법
            initialParams={{
              userIdx: 50,
              userName: 'fofo',
              userLastName: 'lee'
            }}
            // 홈화면에서 스타일 지정하기
            // options={{
            //   title:'유저 화면',
            //   headerStyle:{
            //       backgroundColor: 'pink'
            //   },
            //   headerTintColor: 'red',
            //   headerTitleStyle:{
            //     fontWeight: 'bold',
            //     color: 'purple'
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
