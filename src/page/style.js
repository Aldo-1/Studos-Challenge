import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  cards: {
    marginBottom: '2.1rem',
    '& li:first-child': {
      marginTop: '3.2rem',
    },
    '& li': {
      marginBottom: '2.1rem',
      listStyle: 'none'
    }
  },

})

export default useStyles;