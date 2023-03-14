import styled from 'styled-components'

export const MusicBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 -2px 20px ${(props) => props.theme.backgroundColor};
  `

export const Audio = styled.audio`
  display: none;
`

export const MusicBarContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const MusicBarPlayerProgress = styled.div.attrs((props) => ({
  style: {
    width: props.$width,
  },
}))`
  height: 5px;
  background: ${(props) => props.theme.progressBarColor};
  `

export const MusicBarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const MusicBarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MusicBarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`

export const VolumeProgress = styled.div`
  width: 109px;
`

export const VolumeProgressLine = styled.input`
  width: 109px;
`