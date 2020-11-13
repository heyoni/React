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

class UserScreen extends Component {
  render() {
    //param라는 객체를 만들어서 이 스크린의 루트값을 할당해줌
    //이 값에는 홈스크린에서 보내준 값들(userIdx, userName, userLastName)이 있음
    const {params} = this.props.route;
    //params에서 받아온 값이 있다면 할당해주고 없으면 null값으로 할당해줌
    const userIdx = params ? params.userIdx : null;
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;

    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
          <Text>user screen</Text>
          <Button 
            title="home screen으로 이동하기"
            onPress={()=>{
                this.props.navigation.navigate('home')//App.js에서 정의한 name값을 인자로 넣어줌
            }}
          />
          <Text>userIdx : {JSON.stringify(userIdx)}</Text>
          <Text>userName : {JSON.stringify(userName)}</Text>
          <Text>userLastName : {JSON.stringify(userLastName)}</Text>

        </View>
    )
  }
}

export default UserScreen;
