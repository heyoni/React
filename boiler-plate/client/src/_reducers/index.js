import { combineReducers } from 'redux';
import user from './user_reducer'


//나중에 로그인, 인증 기능을 만들 예정인데 각각 기능에 따른 Reducer가 있다.
//이걸 combineReducers로 합쳐준다.
const rootReducer = combineReducers({
    user,
})


export default rootReducer;