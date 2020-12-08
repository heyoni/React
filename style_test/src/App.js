import React, { Component } from 'react'
// import styles from './App.module.css'
import styles from './App.scss'
import classNames from 'classnames/bind'
import Button from './components/Button/Button';

const cx = classNames.bind(styles)
class App extends Component {
  render() {
    const isBlue = true;
    return(
      // <div className={cx('box', {
      //   blue: isBlue
      // })}>
      //   <div className={cx('box-inside')}></div>
      // </div>
      <div>
        <Button>버튼</Button>
      </div>
    )
  }
}

export default App;
