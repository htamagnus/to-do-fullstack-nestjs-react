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
        background: linear-gradient(90deg, #03012c 4%, rgba(16,85,150,1) 53%, rgba(0,130,255,1) 86%);;
    }
`
