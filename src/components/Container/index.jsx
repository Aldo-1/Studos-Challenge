import useStyles from './styles'
import { useTheme } from 'react-jss'
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container