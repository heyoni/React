// 액션 생성 함수 설정하기
import * as types from './ActionTypes'

export const increment = () => ({
    type: types.INCREMENT
})

export const decrement = () => ({
    type: types.DECREMENT
})


//색상을 지정해주는 액션이기 때문에 파라미터로 color를 받고 이 값을 객체 안에 넣음
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
})