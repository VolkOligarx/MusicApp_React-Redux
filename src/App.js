import './App.css';
import * as S from './App.style'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext, themes } from './theme'
import { AppRoutes } from './AppRoutes'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAccessToken } from './Redux/userCredentialsSlice';

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.userCredentials.accessToken);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const cookieAccessToken = getCookie("accessToken")

  useEffect(() => {
    if (!accessToken) {
      if (cookieAccessToken) {
        dispatch(setAccessToken(cookieAccessToken))
      }
    }
  },[]);


  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    setCurrentTheme(themes.dark)
  }


  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <div className="App">
            <S.Wrapper>
              <S.Container>
                <AppRoutes token={cookieAccessToken} />
              </S.Container>
            </S.Wrapper>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
