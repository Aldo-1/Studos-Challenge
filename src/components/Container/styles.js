import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    width: '100%',
    maxWidth: theme.grid.container,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme.grid.gutter,
    paddingRight: theme.grid.gutter,
  })
})

export default useStyles;