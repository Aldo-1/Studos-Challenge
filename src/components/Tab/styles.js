import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  tab: ({ active, theme }) => ({
    listStyle: 'none',
    fontSize: theme.font.sizes.small,
    color: active ? theme.colors.blue : theme.colors.grape,
    flex: 1,
    lineHeight: '1.9rem',
    cursor: 'pointer',
    textAlign: 'center',
    borderBottom: active && `2px solid ${theme.colors.blue}`,
    paddingBottom: active && '0.8rem',
  }),
  '@media (min-width: 767px)': {
    tab: {
      minWidth: '11.3rem',
    }
  }
})

export default useStyles;