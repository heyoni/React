/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, Button } from 'react-native';
import Logo from './assets/pics/home_icon.png'
import { CommonActions } from '@react-navigation/native'




//사이드바 스타일 적용하기
class SideDrawer extends Component {
    navigateToScreen = (route) => () =>{
        //무한루프를 멈추기 위해 2개의 인자를 받음
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route,
                params: {},
            })
        )
    }
    
  render() {
    return(
        <View style={styles.container}>
            {/* <Text>hello world </Text> */}
            <ScrollView>
                <View>
                    <View style={styles.imageContainer}>
                        <Image
                          source={Logo}
                          style={{width:40, height:40}}
                        />
                    </View>
                    <Text style={styles.sectionHeading}>Section 1</Text>
                    <View style={styles.navSectionStyle}>
                        <Text 
                          style={styles.navItemStyle}
                          onPress={this.navigateToScreen('Home')}
                        >
                            HOME
                        </Text>
                        <Text 
                          style={styles.navItemStyle}
                          onPress={this.navigateToScreen('User')}
                        >
                            USER
                        </Text>                        
                        <Text 
                          style={styles.navItemStyle}
                          onPress={()=>alert('help')}
                        >
                            HELP
                        </Text>                        
                        <Text 
                          style={styles.navItemStyle}
                          onPress={()=>alert('info')}
                        >
                            INFO
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{paddingLeft: 10, paddingBottom: 30}}>
                <Text> copyright </Text>

            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80
    },
    imageContainer:{
        alignItems: 'center',
        padding: 50,
    },
    sectionHeading:{
        color: '#fff',
        backgroundColor: '#ef9de4',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },
    navSectionStyle:{
        backgroundColor: '#04b6ff'
    },
    navItemStyle:{
        padding:10,
        color:'#fff'
    }
})

export default SideDrawer;
