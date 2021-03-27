import useStyles from './styles'

import { useTheme } from 'react-jss'
import Arrow from 'assets/images/arrow.svg'


const MainCard = ({ title, colors, image, background }) => {
  const theme = useTheme()
  const classes = useStyles({ background, colors, theme })
  return (
    <div className={classes.Content}>
      <h1 className={classes.Title}>{title}</h1>
      <div className={classes.Images}>
        <div className={classes.ImageRelative}>
          <img src={image} alt={title} className={classes.ImageType} />
        </div>
        <div>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
    </div>
  )
}

export default MainCard