import { useState } from 'react'
import useStyles from './styles'
import { useTheme } from 'react-jss'
import PropTypes from 'prop-types';

const Toggle = ({ value, id, name, isChecked, onToggle }) => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  const [toggled, setToggled] = useState(isChecked)

  const onChange = () => {
    const status = !toggled
    setToggled(status)
    !!onToggle && onToggle(status)
  }

  return (
    <label className={`${classes.switch}`}>
      <input type="checkbox"
        value={value}
        id={id}
        name={name}
        className={`${classes.inputCheck}`}
        checked={toggled}
        onChange={onChange}
      />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  )
}

Toggle.defaultProps = {
  isChecked: false,
}

Toggle.propTypes = {
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onToggle: PropTypes.func
}

export default Toggle