import React from 'react';
import styled from 'styled-components';


//css in js -> 자바스크립트 파일 안에 스타일 선언하기
//props에 접근하기 위해 이걸 사용한다.
//장점 : 동적 스타일링이 편해짐
const Wrapper = styled.div`
    border: 1px solid black;
    display: inline-block;
    padding : 1rem;
    border-radius:3px;
    font-size: ${(props) => props.fontSize};
    ${props => props.big && `
        font-size: 2rem;
        padding: 2rem;
    `}
    &:hover{
        background: black;
        color:white;
    }

`;

const StyledButton = ({children, big, ...rest }) => {
    return (
        <Wrapper fontSize="1.25rem" {...rest} big={big}>
            {children}
        </Wrapper>
    )
}

export default StyledButton