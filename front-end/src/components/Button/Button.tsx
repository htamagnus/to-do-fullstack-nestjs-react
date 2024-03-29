import styled from 'styled-components'
import {SpaceProps, space, variant, typography, TypographyProps} from 'styled-system'

type ButtonProps = SpaceProps & TypographyProps &{
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
               boxShadow: '0 2px 82px 0 rgb(177, 177, 177)',
            }
        }
    })}
    ${space}
    ${typography}
`

Button.defaultProps = {
    variant: 'default'
}