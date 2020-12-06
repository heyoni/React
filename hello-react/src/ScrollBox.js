import React, { Component } from 'react';

class ScrollBox extends Component{

    scrollToBottom = () =>{
        const { scrollHeight, clientHeight } = this.box;
        // 위 코드는 비구조화 할당 문법을 사용함 : 객체에서 특정값을 추출하여 따로 레퍼런스를 만들 때
        // 아래 주석과 같은 의미
        // const scrollHeight = this.box.scrollHeight;
        // const clientHeight = this.box.clientHeight;
        
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    render() {
        const innerStyle={
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }
        const boxStyle={
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }

        return(
            <div
              style={boxStyle}
              ref={(ref)=>{this.box=ref}}>
              <div style={innerStyle}></div>
            </div>
        );
    }

}

export default ScrollBox;