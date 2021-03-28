import MainCard from 'components/MainCard'
import Container from 'components/Container'
import Header from 'components/Header'

import mock from 'utils/mock/mock'


function Studos() {
  return (
    <Container>
      <Header />
      <main>
        <ul>
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
        <aside>
          Side bar
        </aside>
      </main>
    </Container>
  )
}

export default Studos
