/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './src/header';
import Generator from './src/generator'
import NumList from './src/numlist'

class App extends Component {
  state = {
    appName : 'my first app',
    random : [36, 999]
  }

  //버튼을 눌렀을 때 랜덤번호가 추가되게끔 하는 함수
  onAddRandomNum = () => {
    alert('add random num!')
  }

  render() {
    return (
      //내부에서 주는 방법
      // <View style={{
      //   backgroundColor:'green',
      //   height:'100%',
      //   paddingTop:50
      //   //margin : view와 다른 컴포넌트 간 간격, padding : view와 view사이
      // }}>
      // <View style={styles.mainView}>
      //   <View style={styles.subView}>
      //     <Text style={styles.mainText}>hello world!!</Text>
      //   </View>
      //   <View style={styles.subView2}>
      //     <Text>hello world!!</Text>
      //   </View>        
      // </View>


      //header 파일
      // <View style={styles.mainView}>
      //   {/* <View style={styles.subView}>
      //     <Text style={styles.mainText}>hello world!!</Text>
      //   </View> */}
      //   <Header name={this.state.appName}/>
      // </View>
      <View style={styles.mainView}>
        <Header name={this.state.appName}/>
        <View>
          <Text 
          style={styles.mainText}
          onPress={()=>alert('text touch event')}
          >hello world</Text>
        </View>
        <Generator add={this.onAddRandomNum}/>

        <NumList num={this.state.random}/>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  mainView:{
    flex:1, //다른 flex가 3이라면 1/4 차지
    backgroundColor:'white',
    paddingTop:50,
    alignItems:'center',
    // justifyContent:'c1₩enter'
  },
  subView: {
    // flex:1,
    backgroundColor:'yellow',
    marginBottom:10,
    //텍스트는 뷰 안에 감싸져있기 때문에 뷰의 스타일을 따름
    // 그래서 폰트사이즈가 커지면 줄바꿈이 됨
    // width:'50%'
  },
  subView2: {
    flex:2,
    backgroundColor:'yellow',
    marginBottom:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  mainText:{
    fontSize:20,
    fontWeight:'bold',
    padding:10
  }
})



export default App;