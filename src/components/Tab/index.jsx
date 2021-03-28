import useStyles from './styles'
import { useTheme } from 'react-jss'
import PropTypes from 'prop-types';

const Tab = ({ active, label }) => {
  const theme = useTheme()
  const classes = useStyles({ active, theme })
  return (
    <li className={classes.tab}>
      {label}
    </li>
  )
}

Tab.defaultProps = {
  active: false,
}


Tab.propTypes = {
  active: PropTypes.bool,
}


export default Tab