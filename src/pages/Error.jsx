import * as S from "./ErrorStyle"
import { NavLink } from 'react-router-dom'

export const Error = () => {
    return (
      <S.StyleNotFound>
        <h2>404</h2>
        <p>Страница не найдена</p>
        <NavLink to="/">На главную</NavLink>
      </S.StyleNotFound>
    )
  }