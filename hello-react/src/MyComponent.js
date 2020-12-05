import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{

  constructor(props) {
      //컴포넌트의 생성자 메서드
      super(props);
      this.state = {
          number: 1
      }
  }
  static defaultProps = {
    name: '기본이름'
  }

  static propTypes = {
      name: PropTypes.string,
      age:PropTypes.number.isRequired
  }

  state = {
      number: 0
  }
  render(){

    return (
        <div>
            <p>안녕하세욤 저는 {this.props.name}입니다.</p>
            <p>저는 {this.props.age}살 입니다.</p>
            <p>이 메세지는 {this.state.number}번째로 표시되었습니다.</p>
            <button onClick={() =>{
                this.setState({
                    number: this.state.number + 1
                })
            }}>추가하기</button>
        </div>
    )
  }
}
// MyComponent.defaultProps = {
//     name:'기본 이름'
// }
// MyComponent.PropTypes = {
//     // props 검증하기
//     name : PropTypes.string
// }


export default MyComponent;
