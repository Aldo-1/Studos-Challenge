import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'
import Toggle from './index'
import userEvent from '@testing-library/user-event'

describe('<Toggle />', () => {
  it('should render the component', () => {
    renderWithTheme(<Toggle />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should dispatch onCheck with status change', async () => {
    const onToggle = jest.fn()
    renderWithTheme(<Toggle onToggle={onToggle} />)
    expect(onToggle).not.toBeCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledTimes(1)
    })

    expect(onToggle).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck with status change', async () => {
    const onToggle = jest.fn()
    renderWithTheme(<Toggle isChecked onToggle={onToggle} />)
    expect(onToggle).not.toBeCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledTimes(1)
    })

    expect(onToggle).toHaveBeenCalledWith(false)
  })
})