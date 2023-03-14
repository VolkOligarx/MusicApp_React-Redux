import * as S from './style'
import Track from '../Track/Track'
import TrackSkeleton from '../TrackSkeleton/TrackSkeleton'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrackList } from '../../Redux/trackListSlice'
import { setUserEmail } from '../../Redux/userEmailSlice'
import { setUserPassword } from '../../Redux/userPasswordSlice'
import { setUserName } from '../../Redux/userNameSlice'
import { setAuthUserToken } from '../../Redux/authUserSlice'


const Playlist = (props) => {
const [tracks, setTracks] = useState([]);
const [isLoading, setIsLoading] = useState(false)
const token = useSelector((state) => state.authUser.token)
const navigate = useNavigate()
const dispatch = useDispatch()
const selector = useSelector((state) => state.trackList.tracks)


if (token === '') {
  navigate('/login')
}
  useEffect(() => {
    setIsLoading(true);
    switch (props.dataPick) {
      case "data":

        const cookie = document.cookie.split(';')
      
        const emailCookieRaw = cookie[1].split('=')
        const emailCookie = emailCookieRaw[1]
      
        const passwordCookieRaw = cookie[2].split('=')
        const passwordCookie = passwordCookieRaw[1]
      
        const usernameCookieRaw = cookie[3].split('=')
        const usernameCookie = usernameCookieRaw[1]
      
        const tokenCookieRaw = cookie[4].split('=')
        const tokenCookie = tokenCookieRaw[1]
      
          dispatch(setUserEmail(emailCookie))
          dispatch(setUserPassword(passwordCookie))
          dispatch(setUserName(usernameCookie))
          dispatch(setAuthUserToken(tokenCookie))

        axios.get('https://painassasin.online/catalog/track/all/').then(res => {
          dispatch(setTrackList(res.data))
            // navigate('/error')
            // navigate('/')
          setTracks(res.data)          
          console.log(selector);
          setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error)
        navigate('/login')
      }) 
        break;
    
        case "playlist":
          console.log(props.playlistsNumber);
          const cookie1 = document.cookie.split(';')
          console.log(cookie1);
        
          const emailCookieRaw1 = cookie1[0].split('=')
          const emailCookie1 = emailCookieRaw1[1]
        
          const passwordCookieRaw1 = cookie1[1].split('=')
          const passwordCookie1 = passwordCookieRaw1[1]
        
          const usernameCookieRaw1 = cookie1[2].split('=')
          const usernameCookie1 = usernameCookieRaw1[1]
        
          const tokenCookieRaw1 = cookie1[3].split('=')
          const tokenCookie1 = tokenCookieRaw1[1]
        
            dispatch(setUserEmail(emailCookie1))
            dispatch(setUserPassword(passwordCookie1))
            dispatch(setUserName(usernameCookie1))
            dispatch(setAuthUserToken(tokenCookie1))        

          axios.get('https://painassasin.online/catalog/selection/').then(res => {
            switch (props.playlistsNumber) {
              case 1:
                setIsLoading(false);
                dispatch(setTrackList(res.data[0].items))
                setTracks(res.data[0].items) 
                break;
              case 2:
                setIsLoading(false);
                dispatch(setTrackList(res.data[1].items))
                setTracks(res.data[1].items) 
                break;
              case 3:
                setIsLoading(false);
                dispatch(setTrackList(res.data[2].items))
                setTracks(res.data[2].items) 
                break;
      
              default:
                break;
            }
          })
          .catch(function (error) {
            console.log(error)
            navigate('/login')
          }) 
          break;

        case "favorite":
          axios.get('https://painassasin.online/catalog/track/favorite/all', {headers: {
            'authorization': `Bearer ${token}`
          }}).then(res => {
            setIsLoading(false);
            setTracks(res.data);
          })
          .catch(function (error) {
            console.log(error);
            navigate('/login')
          })
          break;
      default:
        break;
    };
  },[]);
  return (
    <S.Playlist>
      {
        isLoading ?
          new Array(10).fill(0).map((item, index) => {
            return (
              <S.PlaylistItem key={index}>
                <TrackSkeleton />
              </S.PlaylistItem>)
          }) :
          tracks.map((track, index) => {
            return (
              <S.PlaylistItem key={index}>
                <Track
                  id = {track.id}
                  titleLink={track.track_file}
                  titleName={track.name}
                  authorLink="http://"
                  authorName={track.author}
                  albumLink="http://"
                  albumName={track.album}
                  time={(track.duration_in_seconds / 60).toFixed(2)}
                />
              </S.PlaylistItem>
            )
          })
      }
    </S.Playlist >
  )
}  
  export default Playlist