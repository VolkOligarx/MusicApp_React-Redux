import styled from 'styled-components'

export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 451px;
`
export const Track = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: ${(props) => props.theme.elementBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`

export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: ${(props) => props.theme.optionalColor};
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.basicTextColor};
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
}
`

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.optionalColor};
  `

export const TrackAuthor = styled.div`
  width: 291px;
  display: flex;
  justify-content: flex-start;
`

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.basicTextColor};
  text-align: left;
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
}
`

export const TrackAlbum = styled.div`
  width: 215px;
`
export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.optionalColor};
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
  }
`

export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: ${(props) => props.theme.optionalColor};
  `

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: ${(props) => props.theme.optionalColor};
  `