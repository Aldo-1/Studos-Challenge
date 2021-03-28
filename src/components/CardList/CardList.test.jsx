import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'
import CardList from './index'
import cards from './mock'

describe('<CardList />', () => {
  it('should render the cards', () => {
    renderWithTheme(<CardList cards={cards} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('shouldnt render the cards', () => {
    renderWithTheme(<CardList cards={[]} />)
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
})