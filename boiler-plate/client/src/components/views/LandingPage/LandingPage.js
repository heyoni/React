import React, { useEffect } from 'react';
import axios from 'axios';


function LandingPage() {
    //이 페이지에 들어오자마자 실행되는 코드
    useEffect(() => {
        //get 요청을 서버에 보내줌 Endpoint는 '/api/hello'
        axios.get('/api/hello')
        //보낸 다음 서버에서 돌아오는 응답을 콘솔창에 띄움
        .then(response=> {console.log(response.data)})
    }, []) // 실행 안됨 -> CORS정책 때문에

    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center', width:'100%', height:'100vh'}}>
            <h2>시작 페이지</h2>
        </div>
    )
}

export default LandingPage
