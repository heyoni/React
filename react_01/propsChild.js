/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native'
//props란?
//수정변경이 불가능한 읽기전용 프로퍼티
//부모자식 관계가 형성되어야 의미가 있음
//react, react-native모두 일방향 부모-자식으로 데이터 전달
//자식한테 probs라는 값을 받고 자식은 수정변경되지 않고 그대로사용
//왜사용? 1번자식에게 편지씀 2번... 100번...에게도 똑같은 편지 손으로 씀 -> 비효율적
//원본을 가지고 있고 자식들에게 똑같은 편지가 전달된다면 효율적임(복사본이라는 표현은 부적절)
//부모가 가지고 있는 정보가 간편하고 손쉽게 전달할 수 있다는 뜻



//props인수로 받아서 props.child_Text, props.child_changeState로 받는 것
//자식이 부모의 데이터를 쉽게 받을 수 있으며 부모의 데이터를 변경하지 않고 자유롭게 활용 가능
const propsChild = (props) => {
    return (
        <View>
            <Text onPress={props.child_changeState}>
                {props.child_Text}
            </Text>
        </View>

    )
}

export default propsChild;