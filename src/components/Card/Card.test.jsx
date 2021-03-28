import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'
import Card from './index'
import BgDarkBlue from 'assets/images/bg-blue_card.svg'
import BgBlue from 'assets/images/bg-blue_light.svg'
import theme from 'styles/theme'

const props = {
  date: "02/06",
  hour: "8h30",
  title: "Lista 03 - Fisica Moderna - Modulo 1 - Modulo 2 - Aula 4",
  subject: "Matemática",
  teacher: "Ricardo",
  questionsCompleted: "0",
  questions: "100",
  type: 1
}

describe('<Card />', () => {
  it('should render the component', () => {
    const { container } = renderWithTheme(<Card {...props} />)

    expect(screen.getByRole('heading', { name: /Lista 03 - Fisica Moderna - Modulo 1 - Modulo 2 - Aula 4/i })).toBeInTheDocument()
    expect(screen.getByText('Até 02/06 8h30')).toBeInTheDocument()
    expect(screen.getByText('Matemática')).toBeInTheDocument()
    expect(screen.getByText('Ricardo')).toBeInTheDocument()
    expect(screen.getByText('0/100')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the bgBlueDark', () => {
    const { container } = renderWithTheme(<Card {...props} type={1} />)
    expect(container.firstChild).toHaveStyle({
      background: `url(${BgDarkBlue}) no-repeat center center / cover, ${theme.colors['darkBlue']}`,
    })
  })

  it('should render the bgBlue', () => {
    const { container } = renderWithTheme(<Card {...props} type={0} />)
    expect(container.firstChild).toHaveStyle({
      background: `url(${BgBlue}) no-repeat center center / cover, ${theme.colors['blue']}`,
    })
  })
})