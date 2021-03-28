import MainCard from 'components/MainCard'
import Container from 'components/Container'
import Header from 'components/Header'
import { useTheme } from 'react-jss'
import mock from 'utils/mock/mock'
import ChooseBar from '../components/ChooseBar'
import useStyles from './style'

function Studos() {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <Container>
      <Header />
      <main className={classes.main}>
        <ul className={classes.cards}>
          {mock.map((item, id) => (
            <li key={id}>
              <MainCard
                title={item.title}
                colors={item.colors}
                image={item.image}
                background={item.background}
              ></MainCard>
            </li>))}
        </ul>
        <ChooseBar />
      </main>
    </Container>
  )
}

export default Studos
