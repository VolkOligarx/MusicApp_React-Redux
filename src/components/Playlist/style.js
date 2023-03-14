import styled from 'styled-components'

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
  height: 51px;
`

export const PlaylistTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`