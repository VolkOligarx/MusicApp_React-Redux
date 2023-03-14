import * as S from './style'
import TrackPlay from '../TrackPlay/TrackPlay'
import { trackName, author } from "../Track/Track";
import { useState } from "react"
import axios from 'axios';

const Player = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  axios.get('https://painassasin.online/catalog/track/all/').then(res => {
    setIsLoading(false);
}); 


  const [play, setPlay] = useState('/img/icon/sprite.svg#icon-play')
        
  const played = () => {
    props.updateState()

if (props.audioRef.current.paused) {
      props.audioRef.current.play()
      setPlay('/img/icon/pause.svg#icon-pause')
    } 

else {
      props.audioRef.current.pause()
      setPlay('/img/icon/sprite.svg#icon-play')
    }
  }

  return (
    <S.Player>
      <S.PlayerControls>
      <S.PlayerButtonPrev>
      <S.PlayerButtonPrevSvg alt="prev"></S.PlayerButtonPrevSvg>
        </S.PlayerButtonPrev>
        <S.PlayerButtonPlay>
        <S.PlayerButtonPlaySvg alt="playPause"
        onClick={played}>
            <use xlinkHref={play}></use>
          </S.PlayerButtonPlaySvg>
        </S.PlayerButtonPlay>
        <S.PlayerButtonNext>
        <S.PlayerButtonNextSvg alt="next"></S.PlayerButtonNextSvg>
        </S.PlayerButtonNext>
        <S.BtnIcon>
        <S.PlayerButtonRepeat>
        <S.PlayerButtonRepeatSvg onClick={console.log('repeat')} alt="repeat">
            <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
          </S.PlayerButtonRepeatSvg>
        </S.PlayerButtonRepeat>
        </S.BtnIcon>
        <S.BtnIcon>
        <S.PlayerButtonShuffle>
        <S.PlayerButtonShuffleSvg alt="shuffle">
            <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
          </S.PlayerButtonShuffleSvg>
        </S.PlayerButtonShuffle>
        </S.BtnIcon>
      </S.PlayerControls>
      {isLoading ? (
        <S.SkeletonPlayer>
        <S.SkeletonPlayerContain>
          <svg
            id="player"
            width="122"
            height="52"
            viewBox="0 0 122 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.490723" width="51" height="51" fill="#313131" />
            <rect x="63" y="29.4907" width="59" height="15" fill="#313131" />
            <rect x="63" y="7.49072" width="59" height="15" fill="#313131" />
          </svg>
        </S.SkeletonPlayerContain>
  
        <S.SkeletonLikeDislike>
        <S.BtnIcon>
        <S.SkeletonLikeSvg alt="like">
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </S.SkeletonLikeSvg>
          </S.BtnIcon>
          <S.BtnIcon>
          <S.SkeletonDislikeSvg alt="dislike">
              <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
            </S.SkeletonDislikeSvg>
          </S.BtnIcon>
        </S.SkeletonLikeDislike>
      </S.SkeletonPlayer>
      ) : (
        <TrackPlay name={trackName} author={author} />
      )}
    </S.Player>
  )
}

export default Player