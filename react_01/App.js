/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// 이 강의의 목표 : react-native 개발시 사전 지식 알기
// ui를 개발하기 위한 자바스크립트
// react-native : 화면에 보여지는것 웹, 앱, 텍스트, 버튼 ... 등 화면을 구성하는 view를 만들어주는 라이브러리

//리엑트라는 모듈에서 컴포넌트라는 클래스를 import
import React, { Component } from 'react';
//텍스트를 띄우기 위해 import해야하는것들
import { View, Text, StyleSheet } from 'react-native';
import PropsChild from './propsChild'//같은 디렉토리 안에 있는 propschild를 임포트함


// 컴포넌트 클래스를 앱이라는 클래스가 상속받음
// 이 안에는 렌더링(render)하는 함수가 있고 이 함수가 리턴하는 것이 화면을 구성함
class App extends Component{
  //state : 컴포넌트에서 렌더링되는 데이터를 담고 유지,관리하는 js객체
  //가장 중요 이 값에 따라 화면에 보여지는 아웃풋이 달라짐
  //state는 class component 안에서 사용가능, 함수 정의를 했다면 state 활용 불가능
  // const App = () =>{
  //   return(

  //   )
  // } state를 못쓰는 예시
  //state는 render 함수 바깥에서 정의함
  //데이터의 재사용성, 값 수정의 용이성으로 효율적이고 합리적인 선택
  state = {
    // 값 초기화, 여기 이외에서 직접 변경하면 안됨(반영되지 않음)
    // 변경하고 싶으면 setS tate 사용함
    sampleText : 'hello world',
    sampleBoolean : false,
    sampleNum : 1
  }

  inputText = () =>(
    this.state.sampleBoolean ?
      //True일 경우
      <Text>True입니다.</Text>
    :
      //False일 경우
      <Text>False입니다.</Text>

  )
  changeState = () => {
    //상태 계속 변경가능하게 하는 코드

    if (!this.state.sampleBoolean){
      this.setState({
        sampleText:'Text Changed!!!',
        sampleBoolean:true
      })
    } else{
      this.setState({
        sampleText:'hello world',
        sampleBoolean:false
      })
    }

  }
  onAdd = () =>{
    //setState의 비동기성!
    //주의!! setState를 통한 데이터 값을 변경을 위해서는 현재버전을 카피 후 업데이트 진행
    //prevState를 사용해서 업데이트함
    this.setState(prevState =>{
      return {sampleNum : prevState.sampleNum+1}
    })
  }
//수정변경이 불가능한 읽기전용 프로퍼티
//부모자식 관계가 형성되어야 의미가 있음
//react, react-native모두 일방향 부모-자식으로 데이터 전달
//자식한테 props라는 값을 받고 자식은 수정변경되지 않고 그대로사용
//왜사용? 1번자식에게 편지씀 2번... 100번...에게도 똑같은 편지 손으로 씀 -> 비효율적
//원본을 가지고 있고 자식들에게 똑같은 편지가 전달된다면 효율적임(복사본이라는 표현은 부적절)
//부모가 가지고 있는 정보가 간편하고 손쉽게 전달할 수 있다는 뜻

  render(){
    return (
      <View style={styles.background}>
        <Text>
          {this.state.sampleText}
          {/* <Text>hello world</Text> state빼고 사용하고 싶으면 이렇게*/}
        </Text>
        <Text>
          {this.inputText()}
        </Text>
        <Text onPress={this.changeState}>
          {this.state.sampleText}
        </Text>
        <Text onPress={this.onAdd}>
          {this.state.sampleNum}
        </Text>
        {/* 여기서 부모가 자식에게 데이터 줄 준비를 끝마침 */}
        {/* sampleText에는 sampleText값을, changeState에는 changeState값을 넣어서 전달해줌 */}
        <PropsChild child_Text={this.state.sampleText} child_changeState={this.changeState}/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})
export default App;