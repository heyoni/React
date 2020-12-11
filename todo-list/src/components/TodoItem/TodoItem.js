import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)

class TodoItem extends Component {
    render() {
        //todoitem이 받아오는 props
        //비구조화 할당을 사용함 : 'this.props.' 생략가능!
        const {done, children, onToggle, onRemove} = this.props;
        return(
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={onRemove}>지우기</div>
            </div>
        )
    }
}

export default TodoItem;