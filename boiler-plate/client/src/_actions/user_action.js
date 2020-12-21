import axios from 'axios';
import {
    LOGIN_USER
} from './types' 

export function loginUser(dataToSubmit) { //body에 email,password 값을 파라미터를 통해 받아옴
    
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => { response.data }) //서버에서 받은 데이터를 request에 저장을 한다.

    return {
        //리듀서로 보내기
        //리듀서에서 (이전상태, 액션)을 조합해서 다음 상태를 조합하는 것이기때문에
        type: LOGIN_USER,
        payload: request
    }
}