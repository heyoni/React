/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//외부파일에 작성한 view 파일을 import 해서 쓰는 방법
//현업에서 많이 사용함
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

// const A = () => {
// }
// 리턴값 없음
// const B = (props(예시)) => (
// ) 
//jsx(javascript xml)을 리턴함

// jsx예시 : const example = <tag>helloworld</tag>

const Header = (props) => (
    // <TouchableOpacity
    //     style={styles.header}
    //     //터치이벤트가 발생했을 때 
    //     onPress={()=>alert('jdosfjosdfj')}
    // >
    //     <View>
    //         <Text>This is header</Text>
    //         <Text>{props.name}</Text>
    //     </View>
    // </TouchableOpacity>

    //투명해지지 않음 -> 뷰에 아무런 변화를 일으키지 않기 때문에 스타일을 뷰에 넣어줘야함
    // <TouchableWithoutFeedback
    //     //터치이벤트가 발생했을 때 
    //     onPress={()=>alert('jdosfjosdfj')}
    // >
    //     <View style={styles.header}>
    //         <Text>This is header</Text>
    //         <Text>{props.name}</Text>
    //     </View>
    // </TouchableWithoutFeedback>

    <TouchableOpacity
        style={styles.header}
        
        // onLongPress={()=>alert('jdosfjosdfj')}//길게누름
        // onPressIn={()=>alert('jdosfjosdfj')}//누르는 즉시
        // onPressOut={()=>alert('jdosfjosdfj')}//눌렀다 뗐을 때
        // 텍스트에도 넣을 수 있음
    >
        <View>
            <Text>This is header</Text>
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor:'pink',
        alignItems:'center',
        paddingTop:5,
        width:'100%',
    }
})

export default Header;