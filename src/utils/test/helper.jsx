import { render } from '@testing-library/react'
import { ThemeProvider } from 'react-jss'

import theme from 'styles/theme'
import React from 'react'

export const renderWithTheme = (children) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
