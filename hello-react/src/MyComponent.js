import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
  render(){
    return (
        <div>
            안녕하세욤 저는 {this.props.name}입니다.
        </div>
    )
  }
}
// MyComponent.defaultProps = {
//     name:'기본 이름'
// }
MyComponent.PropTypes = {
    // props 검증하기
    name : PropTypes.string
}


export default MyComponent;
