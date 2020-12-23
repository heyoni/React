import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
    //option은 null, true, false가 있음
    //null : 아무나 출입가능
    //true : 로그인만 출입가능
    //false : 로그인한 유저는 출입 불가능

    function AuthenticationCheck(props) {
        //1. 백엔드에 리퀘스트를 날려서 현재 접속한 사람의 상태를 가져옴
        const dispatch = useDispatch();

        //useEffect를 사용하여 auth api를 가져온다(서버에서 만들었었음)
        useEffect(()=>{
            // 2. dispatch 안에 있는 auth는 user_action에서 만들것
            dispatch(auth()).then(response => {//백엔드에서 처리된 데이터는 response에 있음
                console.log(response)


                //분기처리 (hoc) 다른 페이지로 돌아가게 함
                //1) 로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    if(option) { //3) 로그인 안했는데, option이 true인 페이지에 접속할때
                        props.history.push('/login')
                    }
                }else{
                    //2)로그인 한 상태
                    //2-1)로그인 한 상태인데, adminRoute가 true인 페이지에 isAdmin이 false인 사람이 들어갈 때
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    } else { //3)false 페이지(로그인한 유저 출입불가능), 로그인 한 유저가 로그인/회원가입 페이지 접속할 때
                        if(option === false)
                            props.history.push('/')
                    }
                }
            })
        }, [])

        return(
            <SpecificComponent />
        )
    }




    return AuthenticationCheck
}