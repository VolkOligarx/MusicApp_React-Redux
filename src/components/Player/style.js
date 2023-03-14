import styled from 'styled-components'

export const Player = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
const PlayerButton = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;

  & svg {
    fill: ${(props) => props.theme.basicPlayPauseColor};
  }
  &:hover svg {
    fill: ${(props) => props.theme.hoverPlayPauseColor};
    cursor: pointer;
  }
`
export const PlayerButtonPrev = styled(PlayerButton)`
  margin-right: 23px;
`
export const PlayerButtonPlay = styled(PlayerButton)`
  margin-right: 18px;
`

export const PlayerButtonNext = styled(PlayerButton)`
`

export const PlayerButtonRepeat = styled(PlayerButton)`
`

export const PlayerButtonShuffle = styled(PlayerButton)`
  display: flex;
  align-items: center;
`

export const PlayerButtonPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
  background-image: url("/img/icon/prev.svg");
`

export const PlayerButtonPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
`

export const PlayerButtonNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  background-image: url("/img/icon/next.svg");
`

export const PlayerButtonRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => props.theme.basicIconColor};
  `

export const PlayerButtonShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => props.theme.basicIconColor};
  `

  export const SkeletonPlayer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SkeletonPlayerContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`

export const SkeletonLikeDislike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
  gap: 8.5px;
`

export const SkeletonLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => props.theme.basicIconColor};
  `

export const SkeletonDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: ${(props) => props.theme.basicIconColor};
  `

export const BtnIcon = styled.div`
  padding: 5px;
  margin-left: 20px;
  cursor: pointer;
  &:hover svg {
    fill: transparent;
    stroke: ${(props) => props.theme.hoverIconColor};
  }
  &:active svg {
    fill: transparent;
    stroke: ${(props) => props.theme.activeIconColor};
    fill: ${(props) => props.theme.basicIconColor};
    stroke: ${(props) => props.theme.activeIconColor};
  }
`