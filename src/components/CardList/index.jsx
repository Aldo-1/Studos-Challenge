import useStyles from './styles'
import { useTheme } from 'react-jss'
import Card from 'components/Card'
import PropTypes from 'prop-types';

const CardList = ({ cards }) => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    !!cards.length && <ul className={classes.list}>
      {cards.map((item, id) => (
        <li key={`${item.title}-${id}`}>
          <Card
            date={item.date}
            hour={item.hour}
            title={item.title}
            subject={item.subjet}
            teacher={item.teacher}
            questionsCompleted={item.questionsCompleted}
            questions={item.questions}
            type={item.type}
          />
        </li>
      ))}
    </ul>
  )
}

CardList.propTypes = {
  cards: PropTypes.array
}

export default CardList