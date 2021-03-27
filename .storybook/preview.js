import global from 'styles/global'
import theme from 'styles/theme'
import { ThemeProvider, JssProvider } from 'react-jss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
}

export const decorators = [
  (Story, context) => (

    <JssProvider registry={global}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </JssProvider>
  )
]
