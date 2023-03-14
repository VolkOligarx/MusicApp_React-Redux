import * as S from '../components/MainPage/style'
import Navigation from '../components/Navigation/Navigation'
import Centerblock from '../components/Centerblock/Centerblock'
import Sidebar from '../components/Sidebar/Sidebar'
import { SidePlaylists } from '../components/MainPage/MainPage'
import { MusicMusicBar } from '../components/MusicBar/MusicBar'

const UserCollection = () => {
  return (
    <div className="main-page">
    <S.Main>
      <S.Nav>
        <Navigation />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name="Мои треки"
        dataPick='favorite' />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar playlists={SidePlaylists} />
      </S.Sidebar>
    </S.Main>
    <MusicMusicBar />
    </div>
  )
}

export default UserCollection
