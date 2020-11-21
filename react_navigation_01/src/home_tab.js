/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class TabHomeScreen extends Component {
  render() {
    console.warn(this.props.route);
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Home Screen</Text>
            <Button 
              title="GO TO HOME STACK SCREEN"
              onPress = {() => {
                this.props.navigation.navigate('Home_stack')
              }}
            />
        </View>


    )
  }
}

export default TabHomeScreen;
