import React, { Component } from 'react';

class EventPractice extends Component {
    state ={
        message:''
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습하기</h1>
                <input
                  type="text"
                  name="message"
                  placeholder="please input your text"
                  value={this.state.message}
                  onChange={
                    (e) => {
                        // console.log(e) //이벤트 발생했을 때 콘솔창에 띄움 
                        // console.log(e.target.value); //입력 값을 콘솔창에 띄움
                        this.setState({
                          message:e.target.value
                        })
                    }
                  }
                />
                <button onClick={
                    () => {
                        alert(this.state.message);//알림창에 입력값을 띄우고
                        this.setState({
                            message:''// 버튼을 누르는 즉시 메세지는 공백으로 변환시키기
                        })
                    }
                }>확인</button>
            </div>
        )
    }
}

export default EventPractice;