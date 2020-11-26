/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Animated, StyleSheet,View, Text } from 'react-native'

class AnimOne extends Component {
    constructor(){
        //새로운 애니메이션을 만들 거라는 걸 알려줌
        //스타팅 포인트
        super();
        this.mySquare = new Animated.ValueXY(0, 0);
    }

    componentDidMount(){
        //render함수가 실행 된 후 실행됨
        //엔딩포인트를 지정해서 이동하게끔 해주면 됨
        Animated.spring(this.mySquare, {
            toValue: {x: 50, y: 300}
        }).start();
    }
  render() {
    return (
      //애니메이션을 실행하도록 하는 부분
      <Animated.View
        // style={{ //복잡한 방법
        //     left: this.mySquare.x,
        //     top: this.mySquare.y
        // }}
        style={this.mySquare.getLayout()}
      >
        <View style={styles.square}>
        </View>
      </Animated.View>

    )
  }
}

const styles = StyleSheet.create({
  square :{
      width: 100,
      height: 100,
      backgroundColor: 'skyblue'
  }
})


export default AnimOne;
