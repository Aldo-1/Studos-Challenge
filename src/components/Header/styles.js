import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2rem'
  },
  user: ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& h2': {
      fontSize: theme.font.sizes.small,
      color: theme.colors.grape,
      marginLeft: theme.spacings.xsmall,
      maxWidth: '10rem',
      '@media (min-width: 767px)': {
        fontSize: theme.font.sizes.large,
        maxWidth: 'initial',
        marginLeft: theme.spacings.medium
      }
    }

  }),
  darkMode: ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      fontSize: theme.font.sizes.small,
      color: theme.colors.grape,
      marginRight: theme.spacings.xxsmall,
      fontWeight: theme.font.bold,
      display: 'block',
      maxWidth: '5rem',
      '@media (min-width: 767px)': {
        marginRight: theme.spacings.small,
        maxWidth: 'initial'
      }
    }
  })
})

export default useStyles;