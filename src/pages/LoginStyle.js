import styled from 'styled-components'

export const Div = styled.div`
  height: 50vh;
  min-width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 12px;
  margin-top: 30vh;
  & h2 {
    font-size: 6em;
  }
  & * {
    font-size: 24px;
  }
`

export const Input = styled.input`
  padding-bottom: 0.75vh;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4vh;
  line-height: 1.85vh;
  letter-spacing: -0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  border: none;
  border-bottom: 1px solid #E1E1E1
`

export const Img = styled.img`
  margin-left: 8.6vh;
  margin-right: 8.6vh;
  padding-bottom: 3.1vh;
`

export const Form = styled.form`
  margin-left: 2.7vh;
  margin-right: 2.7vh;
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
  max-height: 45vh;
`
export const Button = styled.button`
  font-weight: 400;
  font-size: 1.4vh;
  line-height: 1.85vh;
  letter-spacing: -0.05px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #FFFFFF;
  margin-bottom: 1.5vh;
  margin-top: 3vh;
  background: #580EA2;
  border-radius: 6px;
  height: 3.63vh;
`