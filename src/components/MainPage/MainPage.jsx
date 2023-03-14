import * as S from './style'
import Centerblock from '../Centerblock/Centerblock'
import Sidebar from '../Sidebar/Sidebar'
import Navigation from '../Navigation/Navigation'

export const SidePlaylists = [
    {
      id: 1,
      name: 'Плейлист дня',
      img: '/img/playlist01.png',
      tracks: {},
      link: '/playlists/1'
    },
    {
      id: 2,
      name: '100 танцевальных хитов',
      img: '/img/playlist02.png',
      tracks: {},
      link: '/playlists/2'
    },
    {
      id: 3,
      name: 'Инди-заряд',
      img: '/img/playlist03.png',
      tracks: {},
      link: '/playlists/3'
    },
  ]

const MainPage = () => {
  return (
    <S.Main>
      <S.Nav>
        <Navigation />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name="Треки" dataPick="data" />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar playlists={SidePlaylists} />
      </S.Sidebar>
    </S.Main>
  )
}

export default MainPage