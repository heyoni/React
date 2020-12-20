import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css' ;
import { Provider } from 'react-redux'


import { applyMiddleware, createStore } from 'redux';
import promiseMiddlewares from 'redux-promise';
import ReduxThunk from 'redux-thunk'

import Reducer from './_reducers'

// store를 생성하고
// 미들웨어 처리 : thunk, promise를 처리해줌
const createStoreWitMiddleware = applyMiddleware(promiseMiddlewares, ReduxThunk)(createStore)

ReactDOM.render(
  // 이렇게 Provider를 통해 리덕스를 연결 할 수 있음
  <Provider
    store={createStoreWitMiddleware(Reducer,
      // extension넣어주기
      window.__REDUX_DEVTOOLS_EXTENSION__ && 
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  > 
    <App />
  </Provider>

  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
