/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TextInput, Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './src/header';
import Generator from './src/generator'
import NumList from './src/numlist'
import Input from './src/input'

class App extends Component {
  onChangeInput = (event) =>{
      this.setState({
          myTextInput:event
      })
  }
  onAddTextInput = () =>{
    this.setState(prevState=>{
      return{
        //텍스트라인이 빈 값으로 바뀜
        myTextInput:'',
        //사용자가 입력한 값들이 alpahbet배열에 들어가게됨
        alphabet:[...prevState.alphabet, prevState.myTextInput]
      }
    })
  } 
  state = {
    myTextInput:'',
    //이 배열의 요소들을 스크롤 뷰에 추가할 예정
    alphabet:['a','b','c','d']
    // appName : 'my first app test',
    // random : [36, 999]
  }

  //버튼을 눌렀을 때 랜덤번호가 추가되게끔 하는 함수
  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState =>{
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }
  //state에 선언한 랜덤이라는 배열에서 터치된 인덱스의 요소를 제외한
  //나머지 dyth값을 새로운 배열에 복사하고
  //그 배열을 setState를 통해 랜덤배열을 업데이트 할 예정
  onNumDelete = (position) =>{
    // alert('delete')

    //filter함수 : 특정 조건에 만족하는 요소들만 뽑아내서 새 배열을 만드는 함수
    //여기서는 인덱스와 포지션이 다를 경우에 새 배열을 만들어줌
    //num변수는 반드시 있어야함 요소 값 업데이트를 위해서(실제로는 사용 안함)
    const newArray = this.state.random.filter((num,index) =>{
      return position != index;
    })
    this.setState({
      random: newArray
    })
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
      // <View style={styles.mainView}>
      //   <Header name={this.state.appName}/>
      //   <View>
      //     <Text 
      //     style={styles.mainText}
      //     onPress={()=>alert('text touch event')}
      //     >hello world</Text>
      //   </View>

      //   {/* 스크롤하는 방법 */}
      //   <ScrollView
      //     style={{width:'100%'}}
      //     // onMomentumScrollBegin={()=>alert('begin')}//스크롤 움직일 때 트리거
      //     // onMomentumScrollEnd={()=>alert('end')}//스크롤 움직임이 멈췄을 때 트리거
      //     // onScroll={()=>alert('scrolling')}//움직이자마자 트리거
      //     // onContentSizeChange={(width, height)=>alert(height)}//사이즈를 트리거
      //     bounces={true}//통통튀는 효과
      //   >
      //     <Generator add={this.onAddRandomNum}/>
      //     <NumList 
      //       num={this.state.random}
      //       delete={this.onNumDelete}
      //       />
      //     </ScrollView>

      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          
          multiline={true}
          maxLength={30}
          autoCapitalize={'none'}
          editable={true}
        />
        <Button 
          title='add text input'
          onPress={this.onAddTextInput}
        />
        <ScrollView style={{width:'100%'}}>
          {
            this.state.alphabet.map((item, idx) => (
              <Text 
                style={styles.mainText}
                key={idx}
              >
                {item}
              </Text>
            ))
          }
        </ScrollView>

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
    padding:10,
    margin:20,
    backgroundColor:'green'
  },
  input :{
    width:'100%',
    backgroundColor:'#cecece',
    marginTop:20,
    fontSize:25,
    padding:10,
  }
})



export default App;