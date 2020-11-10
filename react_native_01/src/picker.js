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


class PickerComponent extends Component {
    state={
        // 처음 화면을 봤을 때 선택되는 값을 정할 수 있음
        country: 'canada'
    }
    render() {
        return (
            <View style={styles.container}>
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
    }
})

export default PickerComponent; 