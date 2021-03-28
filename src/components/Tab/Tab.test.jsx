import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'
import Tab from './index'

describe('<Tab />', () => {
  it('should render the label', () => {
    renderWithTheme(<Tab label="teste" />)
    expect(screen.getByText('teste')).toBeInTheDocument()
    expect(screen.getByRole('listitem')).toHaveStyle({
      color: '#414042',
    })
  })
  it('should active link', () => {
    renderWithTheme(<Tab label="teste" active />)
    expect(screen.getByRole('listitem')).toHaveStyle({
      color: '#339CF7',
      'border-bottom': `2px solid #339CF7`,
    })
  })
})