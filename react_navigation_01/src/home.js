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
import { TextInput } from 'react-native';
import { event } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';

//리엑트 네비게이션에서는 데이터를 보낸다 : 파라미터를 루트로 passing한다 라는 뜻
//home -> user로 데이터를 보낼것
class HomeScreen extends Component {
  state = {
      myIdx : '',
      myName : '',
      myLastName : ''
  }
  onChagneInput_idx = (event) =>{
      this.setState({
          myIdx:event
      })
  }
  onChagneInput_name = (event) =>{
    this.setState({
          myName:event
      })
  }
  onChagneInput_lstName = (event) =>{
    this.setState({
        myLastName:event
      })
  }
  render() {
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
          <Text>home screen</Text>
          <TextInput
            value={this.state.myIdx}
            style={{ width:100, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.onChagneInput_idx}
            autoCapitalize={'none'}
          />
          <TextInput
            value={this.state.myName}
            style={{ width:100, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.onChagneInput_name}
            autoCapitalize={'none'}
          />
          <TextInput
            value={this.state.myLastName}
            style={{ width:100, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.onChagneInput_lstName}
            autoCapitalize={'none'}
          />
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

                this.props.navigation.navigate('user', {
                    //객체를 넣어줌
                    //이 값들을 userScreen으로 넘겨줄거고 파라미터라고 부름 
                    //이 값들이 유저스크린의 루트가 됨
                    userIdx: this.state.myIdx,
                    userName: this.state.myName,
                    userLastName: this.state.myLastName
                })//App.js에서 정의한 name값을 인자로 넣어줌

            }}
          />
              
        </View>
    )
  }
}

export default HomeScreen;
