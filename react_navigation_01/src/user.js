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
        </View>
    )
  }
}

export default UserScreen;
