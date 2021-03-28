import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  tabs: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    display: 'none'
  },
  active: {
    display: 'block'
  }
})

export default useStyles;