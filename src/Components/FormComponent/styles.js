import styled from 'styled-components'

const Style = styled.div`
`

export const Form = styled.form`
`

export const FormHeader = styled.h2`
    align-items: center;
    left: 10;
`

export const FormContents = styled.div`
    display: flex;
    flex-direction: column;

    align-items: left;

    & > label > input {
        cursor: pointer;
    }
`

export const Button = styled.button`
position: relative;
right: 0;
width: 100px;
height: 50px;
margin-top: 20px;
margin-left: 70px;
align-self: stretch;

`


export default Style