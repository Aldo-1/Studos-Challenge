import useStyles from './styles'
import { useTheme } from 'react-jss'
import Clock from 'assets/images/clock.svg'
import Cloud from 'assets/images/cloud.svg'
import BgDarkBlue from 'assets/images/bg-blue_card.svg'
import BgBlue from 'assets/images/bg-blue_light.svg'
import PropTypes from 'prop-types';

const Card = ({ date, hour, title, subject, teacher, questionsCompleted, questions, type }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, type, background: type === 1 ? BgDarkBlue : BgBlue })
  return (
    <div className={classes.content}>
      <div className={classes.headerCard}>
        <div className={classes.hour}>
          <img src={Clock} alt="Um relógio"></img>
          <span>Até {date} {hour}</span>
        </div>
        <img src={Cloud} alt="Uma nuuvem com um check" />
      </div>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.footerCard}>
        <div>
          <span>{subject}</span>
          <span>{teacher}</span>
        </div>
        <span>{questionsCompleted}/{questions}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  date: PropTypes.string,
  hour: PropTypes.string,
  title: PropTypes.string,
  subject: PropTypes.string,
  teacher: PropTypes.string,
  questionsCompleted: PropTypes.string,
  questions: PropTypes.string,
  type: PropTypes.number
}

export default Card