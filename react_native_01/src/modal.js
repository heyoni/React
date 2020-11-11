/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';


//modal : 화면 가장 위에 표시 될 레이아웃
class ModalComponent extends Component {
  state={
    modal: false
  }

  //모달상태가 true, false 화면 상 가장 위에있는 레이어를 만들 지 아닐지 정의하는 함수
  handleModal = () =>{
    this.setState({
        modal: this.state.modal ? false : true
    })
  }
  render() {
    return (
      <View style={{width:'100%'}}>
          <Button
            title='open modal'
            onPress={this.handleModal}
          />
          <Modal
            //이걸 지정해줘야 모달값이 항상 보여지지 않고 버튼으로 눌러서 보이고 싶을 때만 보여짐
            visible={this.state.modal}
            animationType={'slide'}//아래에서 위로 올라옴
            // animationType={'fade'} //fade효과
            
            //모달창이 떴을 떄 트리거 되는 프로퍼티
            onShow={()=>alert('안ㄴ녕!!')}
          >
            <View style={{marginTop: 60, backgroundColor:'red'}}>
                <Text>this is modal</Text>
            </View>

            <Button
              title='close modal'
              onPress={this.handleModal}
            />
          </Modal>
      </View>
    )
  } 
}



const styles = StyleSheet.create({
})



export default ModalComponent;