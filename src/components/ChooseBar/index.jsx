import useStyles from './styles'
import { useTheme } from 'react-jss'
import { useState } from 'react'
import Tab from 'components/Tab'
import CardList from 'components/CardList'
import useFetchMock from 'hooks/useFetchMock'

const ChooseBar = () => {
  const { newsActive, movementsActive, finishedActive } = useFetchMock()
  const [activeIndex, setActiveIndex] = useState(0)
  const handleOnClick = (id) => {
    setActiveIndex(id)
  }
  const theme = useTheme()
  const classes = useStyles({ activeIndex, theme })
  return (
    <>
      <nav className={classes.tabs}>
        <ul>
          {['Novas', 'Em andamento', 'Finalizadas'].map((item, id) => <Tab
            key={item}
            label={item}
            active={activeIndex === id}
            handleClick={() => handleOnClick(id)}
          />)}
        </ul>
      </nav>
      <div className={classes.content}>
        <CardList cards={newsActive} />
      </div>
      <div className={classes.content}>
        <CardList cards={movementsActive} />
      </div>
      <div className={classes.content}>
        <CardList cards={finishedActive} />
      </div>
    </>
  )
}

export default ChooseBar