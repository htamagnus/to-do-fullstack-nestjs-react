import styled from 'styled-components'
import {variant} from 'styled-system'

type ButtonProps = {
    variant?: string
}

export const Button = styled.button<ButtonProps>`
    padding: 10px 20px;
    cursor: pointer;

    ${variant({
        variants: {
            default: {
               backgroundColor: 'transparent',
                color: '#3f3f3f',
                borderBottom: '2px solid #3f3f3f'
            },
            primary: {
               padding: '10px 20px',
               backgroundColor: '#3f3f3f',
               borderRadius: '4px',
               boxShadow: '0 2px 82px 0 rgba(0, 0, 0, 0.5)',
            }
        }
    })}
`

Button.defaultProps = {
    variant: 'default'
}