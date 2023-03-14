import * as S from './style'
import Player from '../Player/Player'
import { audio } from "../Track/Track";
import { useRef, useEffect, useState } from 'react'

export const MusicMusicBar = () => {

  const audioRef = useRef(null)

  const [playerProgress, setPlayerProgress] = useState('0%')
  
  const [isPlaying, setIsPlaying] = useState(false)

  function playOn() {
    setIsPlaying(!isPlaying)
  }
  useEffect(() => {
    if (isPlaying) {
      const newProgressInterval = setInterval(() => {
        setPlayerProgress(
          `${(100 / audioRef.current.duration) * audioRef.current.currentTime}%`
        )
        if (audioRef.current.ended || audioRef.current.paused) {
          clearInterval(newProgressInterval)
          setIsPlaying(false)
        }
      }, 200)
      return () => {
        clearInterval(newProgressInterval)
      }  
    }
  })
  return (
    <S.MusicBar>
      <S.Audio src={audio} ref={audioRef}></S.Audio>
      <S.MusicBarContent>
      <S.MusicBarPlayerProgress $width={playerProgress} />
      <S.MusicBarPlayerBlock>
      <S.MusicBarPlayer>
          <Player
          audioRef={audioRef}
          updateState={playOn}/>
        </S.MusicBarPlayer>
        <S.MusicBarVolumeBlock>
        <S.VolumeContent>
            <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
            </S.VolumeProgress>
            </S.VolumeContent>
          </S.MusicBarVolumeBlock>
        </S.MusicBarPlayerBlock>
      </S.MusicBarContent>
    </S.MusicBar>
  )
}

export default MusicMusicBar