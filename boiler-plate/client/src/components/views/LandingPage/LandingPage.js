import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'



function LandingPage(props) {
    //이 페이지에 들어오자마자 실행되는 코드
    useEffect(() => {
        //get 요청을 서버에 보내줌 Endpoint는 '/api/hello'
        axios.get('/api/hello')
        //보낸 다음 서버에서 돌아오는 응답을 콘솔창에 띄움
        .then(response=> {console.log(response.data)})
    }, []) // 실행 안됨 -> CORS정책 때문에

    const onClickHandler = () => { //서버에서 구현해놓은 로그아웃 api를 이용함
        axios.get(`/api/users/logout`)
            .then(response =>{
                if(response.data.success) {
                    props.history.push("/login")
                } else {
                    alert('로그아웃 실패')
                }
            })
    }

    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center', width:'100%', height:'100vh'}}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage) //wi
