import useStyles from './styles'
import { useTheme } from 'react-jss'

const Toggle = () => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <label className={`${classes.switch}`}>
      <input type="checkbox" className={`${classes.inputCheck}`} />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  )
}

export default Toggle