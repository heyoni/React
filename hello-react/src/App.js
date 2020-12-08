import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MC from './MyComponent'
import EP from './EventPractice'
import EP2 from './EventPractice_method'
import VS from './ValidationSample'
import ScrollBox from './ScrollBox'
import IternalSample from './IterationSample'
import LifeCycleSample from './LifeCycleSample'

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 15777215).toString(16);
}

class App extends Component{
  state = {
    color: '#000000'
  }

  handleClick = () =>{
    this.setState({
      color: getRandomColor()
    })
  }
  render(){
    return (
      // <MC age={3}/>
      // <EP/>
      // <EP2 />
      // <VS />
      // <div>
      //   {/* <SB /> */}
      //   <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
      //   <button onClick={() => this.ScrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>
      // <IternalSample></IternalSample>

      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    );
  }
}

export default App;
