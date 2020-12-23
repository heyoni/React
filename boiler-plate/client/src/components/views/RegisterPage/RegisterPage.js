import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { registerUser } from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {
    const dispatch = useDispatch();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")



    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onNameHandler = (event) =>{
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) =>{
        setConfirmPassword(event.currentTarget.value)
    }





    const onSubmitHandler = (event) =>{
        event.preventDefault();
        
        //패스워드 확인
        if(Password !== ConfirmPassword) {
            return alert('비밀번호가 다릅니다.')
        }

        let body={
            email: Email,
            password: Password,
            name : Name,
        }

        //리덕스를 안 쓸경우 아래처럼 해야함
        // Axios.post('/api/users/register', body)

        dispatch(registerUser(body)) //loginUser는 action폴더에 새로 만들어줌
            .then(response => { //메인 페이지로 이동하기
                if(response.payload.success){
                    props.history.push('/login')
                } else{
                    alert("회원가입 실패")
                }
            })
    }
    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center', width:'100%', height:'100vh'}}>
            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} /> 
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>ConfrimPassword</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />


                <br />
                <button type='submit'>
                    회원가입
                </button>

            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
