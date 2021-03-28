import global from './styles/global'
import theme from './styles/theme'
import { ThemeProvider, JssProvider } from 'react-jss'
import Studos from 'page/Studos'

function App() {
  return (
    <JssProvider registry={global}>
      <ThemeProvider theme={theme}>
        <Studos />
      </ThemeProvider>
    </JssProvider>
  )
}

export default App
