import useStyles from './styles'
import { useTheme } from 'react-jss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Tab from 'components/Tab'
import CardList from 'components/CardList'
import cards from 'components/CardList/mock'

const ChooseBar = () => {
  const [newsActive, setNewsActive] = useState([])
  const [movementsActive, setMovementsActive] = useState([])
  const [finishedActive, setFinishedActive] = useState([])

  const [activeIndex, setActiveIndex] = useState(0)

  const theme = useTheme()
  const classes = useStyles({ theme })

  const handleOnClick = (id) => {
    setActiveIndex(id)
  }

  const filterActiveCards = (item) => {
    return item.started
  }

  const filterNews = (item) => {
    return !item.started && item.questionsCompleted !== item.questions
  }

  const filterFinished = (item) => {
    return !item.started && item.questionsCompleted === item.questions
  }

  const transformDate = (item) => {
    const date = new Date(item.date)

    if (isNaN(date.getTime())) {

      const to_split = item.date.includes('/') ? '/' : '-'
      const transformed_date = item.date.split(to_split)
      return { ...item, date: `${transformed_date[2]}-${transformed_date[1]}-${transformed_date[0]}` }
    }

    const day = date.getDate() >= 10 ? date.getDate() + 1 : `0${date.getDate() + 1}`
    const month = date.getMonth() >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    const new_item = {
      ...item,
      date: `${date.getFullYear()}-${month}-${day}`
    }
    return new_item

  }

  useEffect(() => {
    const loadMock = async () => {
      const response = await axios.get('https://run.mocky.io/v3/865096e8-cdb8-49d7-b548-6488db4c8129', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      const cards = eval(response.data)
      setMovementsActive(cards.filter(item => filterActiveCards(item))
        .map(item => transformDate(item))
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date)))
      setNewsActive(cards
        .filter(item => filterNews(item))
        .map(item => transformDate(item))
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date)))
      setFinishedActive(cards
        .filter(item => filterFinished(item))
        .map(item => transformDate(item)
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
        ))
    }
    loadMock()
  }, [])

  return (
    <>
      <nav>
        <ul>
          {['Novas', 'Em andamento', 'Finalizadas'].map((item, id) => <Tab
            key={item}
            label={item}
            active={activeIndex === id}
            handleClick={() => handleOnClick(id)}
          />)}
        </ul>
      </nav>
      <div>
        <CardList cards={cards} />
      </div>
      <div>
        <CardList cards={cards} />
      </div>
      <div>
        <CardList cards={cards} />
      </div>
    </>
  )
}

export default ChooseBar