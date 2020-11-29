/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Easing, Animated, StyleSheet, View, Text, Button } from 'react-native'

class AnimTwo extends Component {
    constructor(){
        super();
        this.state = {
            redSquare: new Animated.Value(1),
            greenSquare: new Animated.ValueXY(0,0),
            blueSquare: new Animated.ValueXY(0,0),
            mySquare: new Animated.Value(1)

        }
    }

    runAnimation = () => {
      Animated.sequence([
        Animated.timing(this.state.redSquare, {
            toValue:0
        }),
        //동시에 실행시키기
        Animated.parallel([
            Animated.spring(this.state.greenSquare, {
                toValue:{x: 200, y: 0}
            }),
            Animated.spring(this.state.blueSquare, {
                toValue:{x: 200, y: 400}
            }),
        ])

        //따로 실행시키기
        // Animated.spring(this.state.greenSquare, {
        //     toValue:{x: 200, y: 0}
        // }),
        // Animated.spring(this.state.blueSquare, {
        //     toValue:{x: 200, y: 400}
        // }),
      ]).start();
    }
  render() {
    return (
       <View>
          <Animated.View
            style={{
              opacity:this.state.redSquare
            }}
          >
            <View style={styles.redSquares}></View>
          </Animated.View>

          <Animated.View
            style={this.state.greenSquare.getLayout()}
          >
              <View style={styles.greenSquares}></View>
          </Animated.View>

          <Animated.View
            style={this.state.blueSquare.getLayout()}
          >
              <View style={styles.blueSquares}></View>
          </Animated.View>

          <Button
            title="애니메이션 시작"
            onPress={this.runAnimation}
          />
          <Button
            title="콘솔 확인하기"
            onPress={()=>console.log('버튼 눌렸어요!!')}
          />
        </View>

    )
  }
}

const styles = StyleSheet.create({
  redSquares :{
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  greenSquares :{
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  blueSquares :{
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
})


export default AnimTwo;
