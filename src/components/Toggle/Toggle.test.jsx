import { render, screen } from '@testing-library/react'

import Toggle from './index'

describe('<Toggle />', () => {
  it('should render the heading', () => {
  const { container } = render(
  <Toggle />)

  expect(screen.getByRole('heading', { name: /Toggle/i })).toBeInTheDocument()

  expect(container.firstChild).toMatchSnapshot()
  })
})