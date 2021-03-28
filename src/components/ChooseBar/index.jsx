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
  const classes = useStyles({ theme })
  return (
    <div className={classes.container}>
      <nav >
        <ul className={classes.tabs}>
          {['Novas', 'Em andamento', 'Finalizadas'].map((item, id) => <Tab
            key={item}
            label={item}
            active={activeIndex === id}
            handleClick={() => handleOnClick(id)}
          />)}
        </ul>
      </nav>
      <div className={`${classes.content} ${activeIndex === 0 && classes.active}`}>
        <CardList cards={newsActive} />
      </div>
      <div className={`${classes.content} ${activeIndex === 1 && classes.active}`}>
        <CardList cards={movementsActive} />
      </div>
      <div className={`${classes.content} ${activeIndex === 2 && classes.active}`} >
        <CardList cards={finishedActive} />
      </div>
    </div>
  )
}

export default ChooseBar