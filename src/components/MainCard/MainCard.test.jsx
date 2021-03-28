import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helper'
import IlustrationTraining from 'assets/images/ilustration_training.svg'
import Background from 'assets/images/bg-green.svg'
import theme from 'styles/theme'

import MainCard from './index'

const props = {
  title: "Meus treinos",
  colors: "green",
  image: IlustrationTraining,
  background: Background
}

describe('<MainCard />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<MainCard {...props} />)

    expect(screen.getByRole('heading', { name: /Meus treinos/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Meus treinos/i })).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      background: `url(${props.background}) no-repeat center center / cover, ${theme.colors[props.colors]}`
    })

  })
})