import * as S from './style'
import Menu from "../Menu/Menu"
import { useState } from "react"
import { useThemeContext, themes } from '../../theme'

const Navigation = () => {

    const [visible, setVisible] = useState(true)

    const handleClick = () => setVisible(!visible)

    const { theme } = useThemeContext()

    const light = '/img/whiteLogo.png'
    const dark = '/img/darkLogo.png'
  
    const logoImg = theme === themes.dark ? light : dark

return (
<S.MainNav>
  <S.NavLogo>
  <S.Logo src={logoImg} alt="logo" />
  </S.NavLogo>
  <S.NavBurger onClick={handleClick}>
    <S.BurgerLine />
    <S.BurgerLine />
    <S.BurgerLine />
  </S.NavBurger>
  {visible && <Menu />}
</S.MainNav>
)
}

export default Navigation