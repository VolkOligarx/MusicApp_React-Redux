import styled from 'styled-components'

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Nav = styled.nav`
  width: 244px;
  background-color: ${(props) => props.theme.navBackgroundColor};
  padding: 20px 0 20px 36px;
`

export const Centerblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
export const Sidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`