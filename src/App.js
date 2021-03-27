import global from './styles/global'
import theme from './styles/theme'

import { ThemeProvider, JssProvider } from 'react-jss'


function App() {
  return (
    <JssProvider registry={global}>
      <ThemeProvider theme={theme}>
        <h1>Hello</h1>
      </ThemeProvider>
    </JssProvider>
  )
}

export default App
