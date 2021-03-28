import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helper'
import Card from './index'

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
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Card {...props} />)

    expect(screen.getByRole('heading', { name: /Lista 03 - Fisica Moderna - Modulo 1 - Modulo 2 - Aula 4/i })).toBeInTheDocument()


  })
})