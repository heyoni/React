/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Easing, Animated, StyleSheet, View, Text, Button } from 'react-native'

class AnimOne extends Component {
    constructor(){
        //새로운 애니메이션을 만들 거라는 걸 알려줌
        //스타팅 포인트
        super();
        this.state = {
            // mySquare: new Animated.ValueXY(0, 0)
            mySquare: new Animated.Value(1)

        }
    }

    runAnimation = () => {
        //render함수가 실행 된 후 실행됨
        //엔딩포인트를 지정해서 이동하게끔 해주면 됨
        // Animated.spring(this.mySquare, { //바로 실행
        //     toValue: {x: 50, y: 300}
        // }).start();
        Animated.timing(this.state.mySquare, { //시간차 두고 천천히 실행
            toValue: 0,
            duration: 2000,
            delay: 1500,
            // easing: Easing.bounce //엔딩포인트에서 통통 튀는 효과
            // easing: Easing.elastic(3) //멀리 갔다가 엔딩포인트 수렴
        }).start();
    }
  render() {
    return (
       <View>
        {/* //애니메이션을 실행하도록 하는 부분 */}
            <Animated.View
                style={{ //복잡한 방법
                    opacity: this.state.mySquare,//투명해지기
                    top: this.state.mySquare.interpolate({
                        inputRange: [0, 1], //constructure 내부와 runAnimation내부에 선언된 값 => 투명도가 들어감(?) 작은 숫자부터 큰숫자로 넣어줘야함
                        outputRange: [700, 0]//동시에 효과를 넣어주고 싶은 프로퍼티, 배열이 들어갈 수도 있음
                    })//이동하는 애니메이션

                }}
                // style={this.state.mySquare.getLayout()} //간단한 방법
            >
                <View style={styles.square}>
                </View>
            </Animated.View>

            <Button
                title="애니메이션 시작"
                onPress={this.runAnimation}
            />
        </View>

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
