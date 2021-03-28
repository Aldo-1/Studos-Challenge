import { render, screen } from '@testing-library/react'

import CardList from './index'

describe('<CardList />', () => {
  it('should render the heading', () => {
  const { container } = render(
  <CardList />)

  expect(screen.getByRole('heading', { name: /CardList/i })).toBeInTheDocument()

  expect(container.firstChild).toMatchSnapshot()
  })
})