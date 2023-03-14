import { createContext, useContext } from 'react'

export const themes = {
  dark: {
    backgroundColor: '#181818',
    navBackgroundColor: '#1C1C1C',
    activeIconColor: '#FFFFFF',
    hoverIconColor: '#ACACAC',
    basicIconColor: '#696969',
    activeTextColor: '#AD61FF',
    hoverTextColor: '#D9B6FF',
    basicTextColor: '#FFFFFF',
    optionalColor: '#4E4E4E',
    progressBarColor: '#2E2E2E',
    elementBackgroundColor: '#313131',
    basicPlayPauseColor: '#d9d9d9',
    hoverPlayPauseColor: '#696969',
  },
  light: {
    backgroundColor: '#FFFFFF',
    navBackgroundColor: '#F6F5F3',
    elementBackgroundColor: '#F6F4F4',
    activeIconColor: '#AD61FF',
    hoverIconColor: '#707070',
    basicIconColor: '#B1B1B1',
    activeTextColor: '#AD61FF',
    hoverTextColor: '#580EA2',
    basicTextColor: '#000000',
    optionalColor: '#B1B1B1',
    progressBarColor: '#D9D9D9',
  },
}

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark

  return theme
}