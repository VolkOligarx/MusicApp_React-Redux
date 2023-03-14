import styled from 'styled-components'

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.basicTextColor};
  `

  export const Logo = styled.img`
  width: 113.33px;
  height: 17px;
`

export const MainNav = styled.nav`
  background-color: ${(props) => props.theme.navBackgroundColor};
  padding: 20px 0 20px 36px;
`