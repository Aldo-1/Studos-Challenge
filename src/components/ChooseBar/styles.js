import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    marginTop: '1.2rem'
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '33.4rem',
  },
  content: {
    display: 'none'
  },
  active: {
    display: 'block'
  }
})

export default useStyles;