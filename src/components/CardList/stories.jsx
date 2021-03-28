import CardList from './index'
import cards from './mock'
export default {
  title: 'CardList',
  component: CardList,
  args: { cards }
}

export const Cards = (args) => <CardList {...args} />

