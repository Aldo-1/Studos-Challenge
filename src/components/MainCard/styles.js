import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Content: {
    background: ({ background, theme, colors }) => `url(${background}) no-repeat center center / cover, ${theme.colors[colors]}`,
    padding: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '13.8rem',
    position: 'relative',
    borderRadius: ({ theme }) => theme.border.radius
  },
  Images: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: '100%'
    }
  },
  ImageType: {
    position: 'absolute',
    bottom: '-7.03rem',
  },
  ImageRelative: {
    width: '16.8rem',
    position: 'relative'
  },
  Title: ({ theme }) => ({
    color: theme.colors.white,
    maxWidth: '8rem',
    fontSize: theme.font.sizes.medium
  }),
  '@media (min-width: 540px)': {
    Content: {
      padding: ({ theme }) => theme.spacings.xlarge,
    },
    ImageRelative: {

      width: '20.8rem'
    },
    ImageType: {
      bottom: '-6.9rem',
      right: '6.5rem'
    },
    Title: () => ({
      maxWidth: 'initial',
    })
  }
})

export default useStyles