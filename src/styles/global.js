import jss from 'jss'
import preset from 'jss-preset-default'
import { SheetsRegistry } from 'react-jss'

const setupJss = () => {
  jss.setup(preset())

  const sheetsRegistry = new SheetsRegistry()

  const globalStyleSheet = jss
    .createStyleSheet({
      '@global': {
        body: {
          height: '100%',
          fontFamily:
            '-apple-system , BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
        },
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        html: {
          fontSize: '62.5%',
          height: '100%'
        },

        '@font-face': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,

          fallbacks: [
            {
              src:
                'local(Roboto regular) local(Roboto-regular) url(../../public/fonts/roboto-v20-latin-regular.woff2) format(woff2)'
            }
          ]
        },
        // eslint-disable-next-line
        '@font-face': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 700,
          fallbacks: [
            {
              src:
                'local(Roboto bold) local(Roboto-bold), url(../../public/fonts/roboto-v20-latin-700.woff2) format(woff2)'
            }
          ]
        }
      }
    })
    .attach()

  sheetsRegistry.add(globalStyleSheet)

  return sheetsRegistry
}

export default setupJss()
