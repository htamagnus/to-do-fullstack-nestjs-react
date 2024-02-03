import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }> `
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    body {
        background: linear-gradient(90deg, #747474 4%, rgba(210,210,210,1) 53%, rgba(241,241,241,1) 86%);
    }
`
