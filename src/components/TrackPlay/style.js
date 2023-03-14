import styled from 'styled-components'

export const BtnIcon = styled.div`
  padding: 5px;
  margin-left: 28.5px;
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

export const TrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: ${(props) => props.theme.elementBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`

export const TrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackPlayAuthor = styled.div`
  grid-area: author;
  min-width: 49px;
`

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.basicTextColor};
  white-space: nowrap;
`

export const TrackPlayAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
`

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: ${(props) => props.theme.basicTextColor};
  `

export const TrackPlayLikeDislike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`

export const TrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => props.theme.basicIconColor};
  `

export const TrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: ${(props) => props.theme.basicIconColor};
  `