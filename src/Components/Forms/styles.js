import styled from 'styled-components'

const Style = styled.div`
`

export const Form = styled.form`
`

export const FormHeader = styled.h2`
    align-items: left;
    left: 10;
`

export const FormContents = styled.div`
    align-items: left;

    & > label > input {
        cursor: pointer;
    }
`

export default Style