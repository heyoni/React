/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';


class PickerComponent extends Component {
    state={
        // 처음 화면을 봤을 때 선택되는 값을 정할 수 있음
        country: 'canada',
        //slider 
        value: 50
    }
    sliderValueChange = (value) =>{
        this.setState({
            value: value
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Slider 
                style={{height: 40, width: 300}}
                value={this.state.value}
                mininumValue={0}
                maximumValue={100}
                //실시간 변하는 값을 Text에 표현해주기 위함
                onValueChange={this.sliderValueChange}
                //최대, 최소값 바 색 변화주기
                maximumTrackTintColor='red'
                minimumTrackTintColor='blue'
                //변하는 값의 인터벌 주기
                step={1}
                />
                <Text
                style={styles.input}
                >{this.state.value}</Text>
                <Picker 
                style={{height: 50, width: 250}}
                selectedValue={this.state.country}
                //picker태그는 이 설정을 해주지 않으면 제일 상단에 있는 값만 선택하게 됨
                //콜백함수 호출, 첫번째 인자가 실제 picker를 통해 선택된 인자
                //두번째 인자는 picker에서 선택된 index값
                onValueChange={(val, idx) => 
                    this.setState({country:val})
                }

                >
                    <Picker.Item label="Korea" value='korea'/>
                    <Picker.Item label="Canada" value='canada'/>
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        marginBottom:200,
        alignItems: 'center'
    },
    input:{
        width:'100%',
        marginTop:20,
        fontSize:25
    }
})

export default PickerComponent; 