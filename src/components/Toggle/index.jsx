import useStyles from './styles'
import { useTheme } from 'react-jss'

const Toggle = () => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <label className={`${classes.Switch}`}>
      <input type="checkbox" className={`${classes.InputCheck}`} />
      <span className={`${classes.Slider} ${classes.Round}`}></span>
    </label>
  )
}

export default Toggle