//리듀서로 보냄, 전상태와 액션을 보내서 현재상태를 return한다.
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types'

export default function (state={}, action){
    switch (action.type) { //스위치 문법을 쓰는 이유? 보낼 데이터가 많아질수록 타입도 증가함 그 다른 타입을 올때마다 처리해줘야하기 때문임
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload} //'...' 스프레드 오퍼레이터, 위에 파라미터로 받은 걸 그대로 가져옴
            //payload : user_acion에 있는 값들을 가져옴
            //1.loginSuccess의 값은 user_action에 있는 값인데,
            //3.결과값을 나타내주게된다.
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload}
            break;

        case AUTH_USER:
            return { ...state, userData: action.payload} 
            //payload에 모든 user데이터(관리자인지, 로그인 된 사용자인지 ..)가 들어있음 그래서 userData로 이름지음
            break;
    
        default:
            return state;
    }
}