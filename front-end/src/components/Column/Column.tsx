import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, color, ColorProps, borderRadius, BorderRadiusProps, border, BorderProps } from 'styled-system'

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderProps;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${layout}
    ${space}
    ${color}
    ${borderRadius}
    ${border}
`