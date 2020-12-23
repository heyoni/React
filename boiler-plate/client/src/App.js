import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'

function App() {
  return (
    <Router>
      <div>
        <hr />
        <Switch>
          {/* Auth로 감싸줘야함, 넣어야할 매개변수는 auth.js의 function에 정의됨*/}
          {/* //option은 null, true, false가 있음
          //null : 아무나 출입가능
          //true : 로그인만 출입가능
          //false : 로그인한 유저는 출입 불가능 */}
          <Route exact path="/" component={Auth(LandingPage, null)} />
            {/* <LandingPage /> 위에 컴포넌트로 넣어주면 한줄로 가능 */}
          <Route path="/login" component={Auth(LoginPage, false)} />
          <Route path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App