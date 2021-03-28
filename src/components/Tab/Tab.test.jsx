import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'
import Tab from './index'

describe('<Tab />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Tab label="teste" />)


  })
})