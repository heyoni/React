/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const NumList = (props) => {
    return (
        //map : js의 배열객체 내장함수 루프문 같은 문법, 요소 수 만큼 루프를 반복함
        props.num.map((item, idx)=>(
            <View style={styles.numList} key={idx}>
                <Text>{item}</Text>
            </View>
        ))

    )
}

const styles = StyleSheet.create({
    numList:{
        backgroundColor: '#cecece',
        alignItems:'center',
        padding:5,
        width:'100%',
    }
})
export default NumList;