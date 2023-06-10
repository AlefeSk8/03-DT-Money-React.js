import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle>
        <h1>App page</h1>
        <p>app</p>
      </GlobalStyle>
    </ThemeProvider>
  )
}
