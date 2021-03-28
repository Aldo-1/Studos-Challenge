import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  list: ({ theme }) => ({
    listStyle: 'none',
    '& li': {
      marginTop: theme.spacings.small
    },
    '& li:not(:first-child)': {
      marginTop: theme.spacings.xsmall
    }
  })
})

export default useStyles;