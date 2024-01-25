import styled from 'styled-components'
import { flex, FlexProps } from 'styled-system'

type InputProps = FlexProps;

export const Input = styled.input<InputProps>`
    background-color: transparent;
    padding: 10px;
    border-bottom: 2px solid #fff;
    color: #fff;
    outline: none;

    &::placeholder {
        color: #fff;
    }

    ${flex}
`