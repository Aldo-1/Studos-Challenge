import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  Content: {
    background: ({ theme, type, background }) => `url(${background}) no-repeat center center / cover, ${type === 1 ? theme.colors['darkBlue'] : theme.colors['blue']}`
  }
})

export default useStyles;