/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

//버튼을 새로 만들기
const Generator = (props) => {
    return (
        <View style={styles.generator}>
            <Button
                //필수 프로퍼티
                title="Add number"
                onPress={()=>props.add()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    generator:{
        backgroundColor: '#D197CF',
        alignItems:'center',
        padding:5,
        width:'100%',
    }
})
export default Generator;