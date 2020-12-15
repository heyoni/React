import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';



// 리덕스 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
// provider 컴포넌트로 리액트 앱에 store 연동하기
import { Provider } from 'react-redux'

//스토어 생성
const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitafls(onsole.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
