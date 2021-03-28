import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  content: {
    background: ({ background, theme, colors }) => `url(${background}) no-repeat center center / cover, ${theme.colors[colors]}`,
    padding: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '13.8rem',
    position: 'relative',
    borderRadius: ({ theme }) => theme.border.radius
  },
  images: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: '100%'
    }
  },
  imageType: {
    position: 'absolute',
    bottom: '-7.03rem',
  },
  imageRelative: {
    width: '16.8rem',
    position: 'relative'
  },
  title: ({ theme }) => ({
    color: theme.colors.white,
    maxWidth: '8rem',
    fontSize: theme.font.sizes.medium
  }),
  '@media (min-width: 540px)': {
    content: {
      padding: ({ theme }) => theme.spacings.xlarge,
    },
    imageRelative: {

      width: '20.8rem'
    },
    imageType: {
      bottom: '-6.9rem',
      right: '6.5rem'
    },
    title: () => ({
      maxWidth: 'initial',
    })
  }
})

export default useStyles