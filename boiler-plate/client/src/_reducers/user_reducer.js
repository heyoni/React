//리듀서로 보냄, 전상태와 액션을 보내서 현재상태를 return한다.
import {
    LOGIN_USER
} from '../_actions/types'

export default function (state={}, action){
    switch (action.type) { //스위치 문법을 쓰는 이유? 보낼 데이터가 많아질수록 타입도 증가함 그 다른 타입을 올때마다 처리해줘야하기 때문임
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload} //스프레드 오퍼레이터, 위에 파라미터로 받은 걸 그대로 가져옴
            //payload : user_acion에 있는 값들을 가져옴
            break;
    
        default:
            return state;
    }
}