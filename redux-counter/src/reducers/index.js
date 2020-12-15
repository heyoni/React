// 리듀서 만들기 : 액션의 type에 따라 변화를 일으키는 함수
// 초기상태를 반드시 정의해줘야함

import * as types from '../actions/ActionTypes'

const initialState = {
    color: 'black',
    number: 0
}

//리듀서 함수 정의하기
// state와 action값을 파라미터로 받는다.
function counter(state = initialState, action){
    switch (action.type){
        case types.INCREMENT:
            return {
                ...state,
                number:state.number+1
            }
        case types.DECREMENT:
            return {
                ...state,
                number:state.number-1
            }
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }
};

export default counter