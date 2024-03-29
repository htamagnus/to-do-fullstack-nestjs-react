import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, color, ColorProps, borderRadius, BorderRadiusProps, border, BorderProps, flexbox, FlexboxProps, background, BackgroundProps, boxShadow, BoxShadowProps } from 'styled-system'

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderProps & FlexboxProps & BackgroundProps & BoxShadowProps & { cursor?: string };

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    ${({ cursor }) => cursor && `cursor: ${cursor};`}
    ${flexbox}
    ${layout}
    ${space}
    ${color}
    ${borderRadius}
    ${border}
    ${background}
    ${boxShadow}
`