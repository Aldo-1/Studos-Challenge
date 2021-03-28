import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'
import Header from './index'

describe('<Header />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<Header />)

    expect(screen.getByRole('heading', { name: /Olá, João Paulo/i })).toBeInTheDocument()
    expect(screen.getByText(/modo escuro/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})