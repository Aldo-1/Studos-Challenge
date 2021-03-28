import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helper'
import Container from './index'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(<Container>Container</Container>)

    expect(container.firstChild).toHaveStyle({
      width: '100%',
      maxWidth: '114rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})