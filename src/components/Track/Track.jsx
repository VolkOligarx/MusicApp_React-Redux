import axios from 'axios'
import * as S from './style'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export let audio
export let trackName
export let author

const Track = (props) => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.authUser.token)
  const userEmail = useSelector((state) => state.userEmail.token)
  const userPassword = useSelector((state) => state.userPassword.token)


  const handleFavorite = () => {
    axios.post(`https://painassasin.online/catalog/track/${props.id}/favorite/`,{"email": userEmail, "password": userPassword}, {headers: {
      'authorization': `Bearer ${token}`
    }})
    
    .then(res => {
      console.log(res.data.detail);  
    })

    .catch(function (error) {
      console.log(error);
    })
  }

  const handleUnfavorite = () => {
    axios.delete(`https://painassasin.online/catalog/track/${props.id}/favorite/`, {headers: {
      'authorization': `Bearer ${token}`
    }})
    
    .then(res => {
      console.log(res.data.detail);
      if (res.data.detail !== 'An error has occurred') {
        navigate('/Error') 
        setTimeout(() => {
              navigate('/UserCollection') 
        }, 10);  
      }
    })

    .catch(function (error) {
      console.log(error);
    })
  }


  
    return (
        <S.Track>
        <S.TrackTitle>
        <S.TrackTitleImage>
        <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div>
          <S.TrackTitleLink onClick={() => {audio = props.titleLink; trackName = props.titleName; author = props.authorName; }}> 
              {props.titleName}{' '}
              <S.TrackTitleSpan>{props.titleSpan}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
        <S.TrackAuthorLink href={props.authorLink}>
            {props.authorName}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
        <S.TrackAlbumLink href={props.albumLink}>
            {props.albumName}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <div /*className="track__time"*/>
        <S.TrackTimeSvg onClick={handleFavorite} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeSvg onClick={handleUnfavorite} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{props.time}</S.TrackTimeText>
        </div>
      </S.Track>
    )
  }
  
  export default Track