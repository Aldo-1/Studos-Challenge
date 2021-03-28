import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Content: ({ background, theme, type }) => ({
    background: `url(${background}) no-repeat center center / cover, ${type === 1 ? theme.colors['darkBlue'] : theme.colors['blue']}`,
    '& span': {
      display: 'block',
      fontSize: `1.4rem`,
      color: `${theme.colors.white}`
    },
    borderRadius: theme.border.radius,
    padding: theme.spacings.xsmall
  }),
  HeaderCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Hour: ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    background: theme.colors.red,
    padding: '0.2rem 0.4rem 0.2rem 0.4rem',
    borderRadius: theme.border.radius_two,

    '& span': {
      marginLeft: '0.8rem'
    }
  }),
  Title: ({ theme }) => ({
    fontSize: theme.font.sizes.small,
    color: theme.colors.white,
    lineHeight: '1.9rem',
    maxWidth: '32rem',
    margin: `${theme.spacings.small} 0`,
    fontWeight: theme.font.bold
  }),
  FooterCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Class: {

  }
})

export default useStyles;