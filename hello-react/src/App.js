import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MC from './MyComponent'
import EP from './EventPractice'
import EP2 from './EventPractice_method'
import VS from './ValidationSample'
import ScrollBox from './ScrollBox'
import IternalSample from './IterationSample'



class App extends Component{
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
      <IternalSample></IternalSample>

    );
  }
}

export default App;
