import styled from 'styled-components'
import { flex, FlexProps, typography, TypographyProps } from 'styled-system'

type InputProps = FlexProps & TypographyProps;

export const Input = styled.input<InputProps>`
    background-color: transparent;
    padding: 10px;
    border-bottom: 2px solid #818181;
    color: #3f3f3f;
    outline: none;

    &::placeholder {
        color: #3f3f3f;
    }

    ${flex}
    ${typography}
`