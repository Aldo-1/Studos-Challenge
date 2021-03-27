import { render, screen } from '@testing-library/react'

import MainCard from './MainCard'

describe('<MainCard />', () => {
  it('should render the heading', () => {
  const { container } = render(
  <MainCard />)

  expect(screen.getByRole('heading', { name: /MainCard/i })).toBeInTheDocument()

  expect(container.firstChild).toMatchSnapshot()
  })
})