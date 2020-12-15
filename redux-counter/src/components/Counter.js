// Counter 컴포넌트: 숫자, 색상 값, 더하기 빼기, 색상 변경 함수를 props로 전달받음.

import React from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) =>{
    return(
        <div
          className="Counter"
          onClick={onIncrement}
          onContextMenu={(e) => {
              e.preventDefault();
              onDecrement();
          }}
          onDoubleClick={onSetColor}
          style={{
              backgroundColor: color
          }}>
              {number}
          </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
}

Counter.defaultProps = {
    number:0,
    color:'black',
    onIncrement: () => console.warn('onIncrement가 설정되지 않았습니다.'),
    onDecrement: () => console.warn('onDecrement가 설정되지 않았습니다.'),
    onSetColor: () => console.warn('onSetColor가 설정되지 않았습니다.')
}

export default Counter;