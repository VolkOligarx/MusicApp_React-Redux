import * as S from '../components/MainPage/style'
import Navigation from '../components/Navigation/Navigation'
import Centerblock from '../components/Centerblock/Centerblock'
import Sidebar from '../components/Sidebar/Sidebar'
import MusicBar from '../components/MusicBar/MusicBar'
import { SidePlaylists } from '../components/MainPage/MainPage'
import { useParams } from 'react-router-dom'
const Playlists = () => {
  const params = useParams()

  const playlist = SidePlaylists.find(
    (playlist) => playlist.id === Number(params.id)
  )
  let playlistsNumber
switch (playlist.id) {
  case 1:
    playlistsNumber = 1;
    break;
  case 2:
    playlistsNumber = 2;
    break;
  case 3:
    playlistsNumber = 3;
    break;
      
  default:
    break;
}
  return (
    <div className="main-page">
    <S.Main>
      <S.Nav>
        <Navigation />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name={playlist.name} dataPick='playlist'
        playlistsNumber={playlistsNumber} />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar playlists={SidePlaylists} />
      </S.Sidebar>
    </S.Main>
    <MusicBar />
    </div>
  )
}

export default Playlists