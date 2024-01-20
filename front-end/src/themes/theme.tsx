import { ThemeProvider } from "styled-components";

const fontSizes: any = [14, 20, 96]
fontSizes.body = fontSizes[0]
fontSizes.bodyExtraLarge = fontSizes[1]
fontSizes.displayExtraLarge = fontSizes[2]

const primary = '#2567B4';
const secondary = '#F2F2F2';

const theme = {
    fontSizes,
    colors: {
        primary,
        secondary,
    },
}

export const Theme: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}