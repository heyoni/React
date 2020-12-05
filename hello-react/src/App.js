import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MC from './MyComponent'


class App extends Component{
  render(){
    return (
      <MC name={3}/>
    );
  }
}

export default App;
