import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  tab: ({ active, theme }) => ({
    listStyle: 'none',
    fontSize: theme.font.sizes.small,
    color: active ? theme.colors.blue : theme.colors.grape,
    minWidth: '11.3rem',
    lineHeight: '1.9rem',
    textAlign: 'center',
    borderBottom: active && `2px solid ${theme.colors.blue}`,
    paddingBottom: active && '0.8rem',
  })
})

export default useStyles;