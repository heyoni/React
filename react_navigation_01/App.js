/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
 } from "@react-navigation/drawer"
import { View, Text, StyleSheet, Image, Button } from 'react-native';
// 리엑트 네비게이션을 사용하기 위해서는 네비게이션 컨테이너라는 태그에 감싸줘야함
// 그전에 임포터해줘야 하는 요소들임 
// 네비게이션 컨테이너 : 네비게이션 구조, 상태를 관리하기 위한 컴포넌트
// import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo'
import DrawerHomeScreen from './src/home_drawer'
import DrawerUserScreen from './src/user_drawer'
import { Linking } from 'react-native';
import PictogramHome from './src/assets/pics/home_icon.png'
import SideDrawer from './src/my_drawer'
import TabHomeScreen from './src/home_tab'
import TabUserScreen from './src/user_tab'
import TabMessageScreen from './src/message_tab'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import StackHomeScreen from './src/home';
import { TouchableOpacity } from 'react-native';


// CustomDrawerContent = (props) =>{
//   return (
//     //스크롤 뷰, 아이템 리스트를 반환해 줄 예정
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props}/>
//       <DrawerItem 
//         label='help'
//         onPress={()=>Linking.openURL('http://www.google.com')}
//         icon={()=><LogoTitle/>}
//       />
//       {/* 아이콘 넣는 방법1 */}
//       <DrawerItem 
//         label='info'
//         onPress={()=>alert('info Window')}
//       />
//     </DrawerContentScrollView>
//   )
// }

// 스크린, 네비게이터를 리턴하는 프로퍼티
// 랜딩하는 부분에서 stack.screen으로 사용함
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



//이 전체가 스택 네비게이터의 컴포넌트로 들어갈 것
TabComponent = () => {
  return(
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      //터치가 되었을 때
      activeBackgroundColor:'skyblue',
      activeTintColor:'blue',
      inactiveTintColor:'#fff',
      style:{
        backgroundColor:'#c6cbef'
      },
      //아이콘 위치 조정
      // labelPosition:'beside-icon'
      labelPosition:'below-icon'

    }}
    //클릭했을 때 화면이 커보이게 하는 효과
    screenOptions={({route})=>({
      tabBarLabel: route.name,
      tabBarIcon:({focused})=>(
        TabBarIcon(focused, route.name)
      ),
    })}
  >
    <Tab.Screen name="Home" component={TabHomeScreen} />
    <Tab.Screen name="User" component={TabUserScreen} />
    <Tab.Screen name="Message" component={TabMessageScreen} />

  </Tab.Navigator>
  )
}

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize; //vector icons 사용하기

  if (name === 'Home'){
    iconName = 'home-outline' //vector icons 사용하기
    // iconImagePath = require('./src/assets/pics/home_icon.png')
  }else if (name === 'User'){
    iconName = 'people-outline'
    // iconImagePath = require('./src/assets/pics/user.png')
  }else if (name === 'Message'){
    iconName = 'mail-outline'
    // iconImagePath = require('./src/assets/pics/message.png')
  }

  iconSize = focused ? 30 : 20 //선택이 되면 사이즈 조절
  return(
    // <Image
    //   style={{
    //     width: focused? 24 : 20,
    //     height: focused? 24 : 20,
    //   }}
    //   source={iconImagePath}
    // />
    <Ionicons 
      name={iconName}
      size={iconSize}
    />
  )
}

const DrawarComponent = () =>{
  return(
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="front"
          drawerPosition='right'
          drawerStyle={{
            backgroundColor:'#c6cbef',
            width:200
          }}
          drawerContentOptions={{
            activeTintColor:'red',
            activeBackgroundColor:'skyblue'
          }}
          drawerContent={props => <SideDrawer {...props} />}
        >
          <Drawer.Screen 
            name="Home" 
            component={DrawerHomeScreen}
            options={{
              drawerIcon: () =>(
                <Image
                  source={PictogramHome}
                  style={{width: 40, height: 40}}
                />
              )
            }}
          />
          <Drawer.Screen name="User" component={TabComponent}/>
        </Drawer.Navigator>
  )}

const HeaderRight = () =>{
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:'row', paddingRight:15}}>
      <TouchableOpacity
        onPress={()=>{
          navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  )
}
//route : home(홈스크린을 컴포넌트로 갖는 홈루트), user(유저스크린을 컴포넌트로 갖는 유저루트)
//현재는 home이 먼저 작성되어 있기 때문에 홈이 제일 먼저 띄워지나,
//userScreen을 먼저 띄우고 싶다면 Navigator 옆에 initialRouteName ="user"로 주면 됨
class App extends Component {
  //스타일 한가지만 적용 : stack.screen options
  //공통 : stack.navigator screenOptions
  //drawNavgator는 모든 스크린에서 열리기 때문에 스타일이 공통으로 적용되기 때문에 draw.navigator 태그 안에서 스타일 적용함
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Main" 
            component={DrawarComponent} 
            options={{
              headerRight: ({}) => <HeaderRight/>
            }}
          />
          <Stack.Screen name="Home_stack" component={StackHomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     drawerType="front"
      //     // drawerType='slide' //화면 같이 밀림
      //     // drawerType='permanent' //영원히 열림
      //     drawerPosition='right' //오른쪽에서 열림
      //     drawerStyle={{
      //       backgroundColor:'#c6cbef',
      //       width:200
      //     }}
      //     // 다른 페이지로 갈 수 있는 버튼 스타일주기
      //     drawerContentOptions={{
      //       activeTintColor:'red',
      //       activeBackgroundColor:'skyblue'
      //     }}
      //     //drawerContetn를 커스터마이징함
      //     //렌더링하기 위한 리엑트 요소를 반환함
      //     //4개의 props를 받음
      //     // 1. drawe navigator에 어떤 요소들이 있는지 알려주는 state
      //     // 2. 화면 이동을 위한 navigation
      //     // 3. drawer screen에 옵션을 담기위한 디스크립터스
      //     // 4. drew가 열렸는지 판단하는 progress
      //     //대충 이해하되, 4개의 props를 전달해줘야하구나 정도로만 알면 됨
      //     drawerContent={props => <SideDrawer {...props} />}
      //   >
      //     <Drawer.Screen 
      //       name="Home" 
      //       component={DrawerHomeScreen}
      //       options={{
      //         //{/* 아이콘 넣는 방법2 */}
      //         drawerIcon: () =>(
      //           <Image
      //             //이미지 경로를 넣어줘야함
      //             source={PictogramHome}
      //             style={{width: 40, height: 40}}
      //           />
      //         )
      //       }}
      //     />
      //     <Drawer.Screen name="User" component={DrawerUserScreen}/>
      //   </Drawer.Navigator>
      // </NavigationContainer>

  // logoTitle = () =>{
  //   return(
  //     <Image 
  //       style={{width: 40, height: 40}}
  //       source={require('./src/assets/pics/home_icon.png')}
  //     />
  //   )
  // }
  // render() {
  //   return(
  //     <NavigationContainer>
  //       {/* 모든 화면에서 스타일 설정해주기 */}
  //       {/* 공통적으로 지정해도 다른 페이지에서 따로 설정해주면 그 설정이 우선적용됨 */}
  //       <Stack.Navigator 
  //         initialRouteName='home'
  //         screenOptions={{
  //           headerStyle: {
  //               backgroundColor: '#a4511e'
  //           },
  //           headerTintColor: '#fff',
  //           headerTitleStyle: {
  //             fontWeight: 'bold',
  //             color: '#f3d612'
  //           }
  //         }}
  //       >
  //         {/* 이 태그는 Screen 로 동작 될 태그 */}
  //         {/* name:맨위 탭에 생기는 탭 이름, component:표기할 내용이 들어갈 홈페이지 */}
          
  //         {/* 헤더바 이름 변경하기 */}
  //         <Stack.Screen 
  //           name='home' 
  //           component={HomeScreen}
  //           options={{
  //             title:'home입니다.',
  //             headerTitle: <LogoTitle/>,
  //             headerRight: () => (
  //               <Button 
  //                 title='info'
  //                 onPress={()=>alert('button 눌렸어요!')}
  //                 color='orange'
  //               />
  //             )
  //           }}
  //         />
  //         <Stack.Screen 
  //           name='user'
  //           component={UserScreen}
  //           //루트 생성시 파라미터를 초기화 하는 방법
  //           initialParams={{
  //             userIdx: 50,
  //             userName: 'fofo',
  //             userLastName: 'lee'
  //           }}
  //           // 홈화면에서 스타일 지정하기
  //           options={{
  //             title:'유저 화면',
  //             headerStyle:{
  //                 backgroundColor: 'pink'
  //             },
  //             headerTintColor: 'red',
  //             headerTitleStyle:{
  //               fontWeight: 'bold',
  //               color: 'purple'
  //             }
  //           }}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // }
    )  
  }

}

const styles = StyleSheet.create({

});

export default App;
