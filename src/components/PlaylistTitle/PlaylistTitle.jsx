import * as S from './style'

const PlaylistTitle = () => {
    return (
        <S.PlaylistTitle>
        <S.PlaylistCol01>Трек</S.PlaylistCol01>
        <S.PlaylistCol02>ИСПОЛНИТЕЛЬ</S.PlaylistCol02>
        <S.PlaylistCol03>АЛЬБОМ</S.PlaylistCol03>
        <S.PlaylistCol04>
        <S.PlaylistTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTitleSvg>
        </S.PlaylistCol04>
      </S.PlaylistTitle>
    )
  }
  
  export default PlaylistTitle