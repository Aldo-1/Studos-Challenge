import useStyles from './styles'
import { useTheme } from 'react-jss'
import Arrow from 'assets/images/arrow.svg'
import PropTypes from 'prop-types';

const MainCard = ({ title, colors, image, background }) => {
  const theme = useTheme()
  const classes = useStyles({ background, colors, theme })
  return (
    <div className={classes.content}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.images}>
        <div className={classes.imageRelative}>
          <img src={image} alt={title} className={classes.imageType} />
        </div>
        <div>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
    </div>
  )
}

MainCard.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.string,
  image: PropTypes.string,
  background: PropTypes.string,
}


export default MainCard