import React, { Component } from 'react';


// EventPractice를 메서드로 만들기
// 왜? -> 이벤트에 실행할 자바스크립트를 전달하는 것 이아니라 함수 형태의 값을 전달함
// 즉, 가독석을 높이기 위해 미리 함수를 준비하여 전달하는 방법을 사용해봄
class EventPractice extends Component {
    state ={
        username:'',
        message:''
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message:''
    //     })
    // }

    //위 방법은 새 ㅁㅔ서드를 만들 때 마다 constructor 수정필요
    //그래서 아래방법으로 바벨의 transform-class-properties문법을 사용하여 화살표 함수 형태로 메서드를 정의함

    handleChange = (e) => {
        this.setState({
            //input 여러개받기
            [e.target.name] : e.target.value //괄호 안의 값을 key값으로 사용하는 것 
        });
    }

    handleClick = () => {
        alert(this.state.username + ', ' + this.state.message);
        this.setState({
            username:'',
            message:''
        })
    }

    //엔터쳤을 때 확인버튼과 똑같은 동작하기
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습하기2</h1>
                <input
                  type="text"
                  name="username"
                  placeholder="please input your text"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="message"
                  placeholder="please input your text"
                  value={this.state.message}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;