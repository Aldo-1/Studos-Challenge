import { render, screen } from '@testing-library/react'

import ChooseBar from './index'

describe('<ChooseBar />', () => {
  it('should render the heading', () => {
  const { container } = render(
  <ChooseBar />)

  expect(screen.getByRole('heading', { name: /ChooseBar/i })).toBeInTheDocument()

  expect(container.firstChild).toMatchSnapshot()
  })
})