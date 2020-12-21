import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

function LoginPage(props) {
    const dispatch = useDispatch();
    //서버에 보내고자 하는 값들을 state에서 가지고 있는 것
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) =>{
        //페이지 refresh를 방지하기 위한 코드
        //원래 해야할 일들(이 코드 아래 코드들)을 처리하지 못하고 refresh를 해버림
        event.preventDefault();

        let body={
            email: Email,
            password: Password
        }
        //디스패치를 이용하여 액션(상태변환시 나오는 참조값 객체)을 취한다
        dispatch(loginUser(body)) //loginUser는 action폴더에 새로 만들어줌
            .then(response => { //메인 페이지로 이동하기
                if(response.payload.loginSuccess){
                    props.history.push('/') //페이지 이동시 이렇게 사용한다
                } else {
                    alert('Error')
                }
            })

        //이 부분은 _actions/user_action에서 구현할 것
        // Axios.post('/api/user/login', body)
        //     .then(response =>{
                
        //     })
        // // 백엔드 - login api로 이메일과 패스워드를 보내서
        // // User.findOne으로 아이디, 비밀번호 값을 찾고 이메일과 비밀번호가 맞는지 체크하고 맞으면 토큰을 생성해서 쿠키에 저장하고 클라이언트에 전해준다.
    }

    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center', width:'100%', height:'100vh'}}>
            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} /> 
                {/* state 변화시 value가 바뀜, 타이핑을 할 때 onchang라는 이벤트를 발생시켜서 state를 바꿔주는것 state가 바뀌면 value가 바뀐다.*/}
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <br />
                <button type='submit'>
                    Login
                </button>

            </form>
        </div>
    )
}

export default LoginPage
