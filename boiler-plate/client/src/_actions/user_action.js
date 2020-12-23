import axios from 'axios';
import {
    AUTH_USER,
    LOGIN_USER, 
    REGISTER_USER,
} from './types' 

export function loginUser(dataToSubmit) { //body에 email,password 값을 파라미터를 통해 받아옴

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data ) //서버에서 받은 데이터를 request에 저장을 한다.

    return {
        //리듀서로 보내기
        //리듀서에서 (이전상태, 액션)을 조합해서 다음 상태를 조합하는 것이기 때문에
        type: LOGIN_USER,
        payload: request
        //2. 백엔드에서 가져온 모든 데이터들을 다시 reducer에 넣어줘서
    }
}

export function registerUser(dataToSubmit) { //body에 email,password 값을 파라미터를 통해 받아옴

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data ) //서버에서 받은 데이터를 request에 저장을 한다.

    return {
        //리듀서로 보내기
        //리듀서에서 (이전상태, 액션)을 조합해서 다음 상태를 조합하는 것이기 때문에
        type: REGISTER_USER,
        payload: request
        //2. 백엔드에서 가져온 모든 데이터들을 다시 reducer에 넣어줘서
    }
}


export function auth() { //body에 email,password 값을 파라미터를 통해 받아옴

    const request = axios.get('/api/users/auth')
        .then(response => response.data ) //서버에서 받은 데이터를 request에 저장을 한다.

    return {
        //리듀서로 보내기
        //리듀서에서 (이전상태, 액션)을 조합해서 다음 상태를 조합하는 것이기 때문에
        type: AUTH_USER,
        payload: request
        //2. 백엔드에서 가져온 모든 데이터들을 다시 reducer에 넣어줘서
    }
}