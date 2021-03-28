import useStyles from './styles'
import { useTheme } from 'react-jss'

const Container = ({ children }) => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default Container