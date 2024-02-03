import styled from 'styled-components'
import { typography, TypographyProps, SpaceProps, space, color, ColorProps } from 'styled-system'

type TextProps = TypographyProps & SpaceProps & ColorProps;

export const Text = styled.p<TextProps>`
    font-family: 14px;
    color: #3f3f3f;
    ${color}
    ${typography}
    ${space}
`