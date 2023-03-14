import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import MainPage from '../components/MainPage/MainPage'
import MusicBar from '../components/MusicBar/MusicBar'
import { setTrackList } from '../Redux/trackListSlice';

export const MusicPage = () => {

const dispatch = useDispatch();

const getAllTracks = async () => {
  try {
    return await axios.get("https://painassasin.online/catalog/track/all/");
  } catch (error) {
    console.log("ERROR:", error);
  }
}

useEffect(() => {
  getAllTracks().then(response => {
    dispatch(setTrackList(response.data));
  });
},[]);

  return (
    <div className="main-page">
      <MainPage />
      <MusicBar />
      <footer className="footer"></footer>
    </div>
  )
}