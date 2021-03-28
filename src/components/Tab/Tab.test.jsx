import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('should click link', async () => {
    const handleClick = jest.fn()
    renderWithTheme(<Tab label="teste" active handleClick={handleClick} />)
    userEvent.click(screen.getByRole('listitem'))
    await waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})