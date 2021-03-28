import useStyles from './styles'
import User from 'assets/images/profile_image.png'
import Toggle from 'components/Toggle'
import { useTheme } from 'react-jss'

const Header = ({ children }) => {
  const theme = useTheme()
  const classes = useStyles({ theme })
  return (
    <header className={classes.header}>
      <div className={classes.user}>
        <img src={User} alt="Foto do usuario" />
        <h2>Olá, João Paulo</h2>
      </div>
      <div className={classes.darkMode}>
        <span>Modo escuro</span>
        <Toggle />
      </div>
    </header>
  )
}

export default Header