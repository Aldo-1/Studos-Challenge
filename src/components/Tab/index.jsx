import useStyles from './styles'
import { useTheme } from 'react-jss'
import PropTypes from 'prop-types';

const Tab = ({ handleClick, active, label }) => {
  const theme = useTheme()
  const classes = useStyles({ active, theme })
  return (
    <li className={classes.tab} onClick={handleClick}>
      {label}
    </li>
  )
}

Tab.defaultProps = {
  active: false,
}


Tab.propTypes = {
  active: PropTypes.bool,
  handleClick: PropTypes.func,
  label: PropTypes.string
}


export default Tab