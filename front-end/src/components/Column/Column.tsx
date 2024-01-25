import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

type ColumnProps = LayoutProps & SpaceProps;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${layout}
    ${space}
`