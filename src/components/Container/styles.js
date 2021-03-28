import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: ({ theme }) => ({
    width: '100%',
    maxWidth: theme.grid.container,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: `calc(${theme.grid.gutter} / 3)`,
    paddingRight: `calc(${theme.grid.gutter} / 3)`,

  }),
  '@media (min-width: 767px)': {
    container: ({ theme }) => ({
      paddingLeft: theme.grid.gutter,
      paddingRight: theme.grid.gutter,
    })
  }
})

export default useStyles;