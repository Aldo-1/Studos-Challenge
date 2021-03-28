import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: '5.8rem',
    height: '3rem',
    '& input': {
      opacity: 0,
      width: 0,
      height: 0,

    }
  },
  slider: ({ theme }) => ({
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.silver,
    transition: '.4s',
    '&:before': {
      position: 'absolute',
      content: '""',
      height: '2.2rem',
      width: '2.2rem',
      left: '4px',
      bottom: '4px',
      backgroundColor: theme.colors.white,
      transition: '.4s'
    }
  }),
  inputCheck: {
    '&:checked + $slider': {
      backgroundColor: '#2196F3',

    },
    '&:focus + $slider': {
      boxShadow: '0 0 1px #2196F3'
    },
    '&:checked + $slider:before': {
      transform: 'translateX(26px)'
    },
  },
  round: ({ theme }) => ({
    borderRadius: theme.border.radius_check,
    '&:before': {
      borderRadius: theme.border.radius_circle
    }
  })
})

export default useStyles;