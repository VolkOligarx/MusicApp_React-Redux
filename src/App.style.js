import { useSelector } from 'react-redux'
import styled from 'styled-components'


  function Styler() {
    const accessToken = useSelector(state => state.userCredentials.accessToken)
    console.log(accessToken)
    if (accessToken) {
      console.log('accessToken')
      return '#383838'
    }
  }


export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: ${Styler};
  color: ${(props) => props.theme.basicTextColor};
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`
export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
`