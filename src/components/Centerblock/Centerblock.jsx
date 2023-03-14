import * as S from './style'
import axios from 'axios'
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle"
import Playlist from "../Playlist/Playlist"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setAuthUserToken } from "../../Redux/authUserSlice";



const Centerblock = (props) => {
        const dispatch = useDispatch()

        const userEmail = useSelector((state) => state.userEmail.email)
        const userPassword = useSelector((state) => state.userPassword.password)

        axios.post('https://painassasin.online/user/token/', {"email": userEmail, "password": userPassword})
          
        .then(function (data) {

          dispatch(setAuthUserToken(data.data.access))
          console.log(data.data.access);

        })
        
        .catch(function (error) {

          console.log(error);

        })

        const [filter, setFilter] = useState(null)
        
        const selected = (select) => {
          filter === select ? setFilter(null) : setFilter(select)
        }

    return (
        <div>
    <S.CenterblockSearch>
    <S.SearchSvg>
      <use xlinkHref="img/icon/sprite.svg#icon-search" />
    </S.SearchSvg>
    <S.SearchText
        type="text"
        placeholder="Поиск"
        name="search"
        onInput={console.log('search')}
    />
    </S.CenterblockSearch>    
    <S.CenterblockH2>{props.name}</S.CenterblockH2>
    <S.CenterblockFilter>
    <S.Filter>
    <S.FilterTitle>Искать по:</S.FilterTitle>
    <S.FilterButton 
    $active={filter === 'author'}

    onClick={() => selected('author')}>
      исполнителю
    </S.FilterButton>
    {filter === 'author' && (
          <S.FilterSelect>
            <S.FilterSelectIcon>
              <S.FilterSelectIconChoose>Michael Jackson</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose >Frank Sinatra</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose >Calvin Harris</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose >Zhu</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose >Arctic Monkeys</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose >Nero</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose>Skeeter Davis</S.FilterSelectIconChoose>
            </S.FilterSelectIcon>
          </S.FilterSelect>
        )}
    
    <S.FilterButton 
    $active={filter === 'year'}
          onClick={() => selected('year')}>
            году выпуска
    </S.FilterButton>
            {filter === 'year' && (
          <S.FilterSelectYear>
            <S.FilterSelectIcon>
              <S.FilterYear>
                <S.FilterYearLabel type="radio" name="sort" id="new" />
                <S.FilterSelectIconChoose htmlFor="new">Более новые</S.FilterSelectIconChoose>
                <S.FilterYearLabel type="radio" name="sort" id="old" />
                <S.FilterSelectIconChoose htmlFor="old">Более старые</S.FilterSelectIconChoose>
              </S.FilterYear>
            </S.FilterSelectIcon>
          </S.FilterSelectYear>
        )}
    
    <S.FilterButton 
    $active={filter === 'genre'}
          onClick={() => selected('genre')}>
            жанру
    </S.FilterButton>
            {filter === 'genre' && (
          <S.FilterSelect>
            <S.FilterSelectIcon>
              <S.FilterSelectIconChoose>Рок</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose>Хип-хоп</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose>Поп-музыка</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose>Техно</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose>Инди</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose>Реп</S.FilterSelectIconChoose>
              <S.FilterSelectIconChoose>Джаз</S.FilterSelectIconChoose>
            </S.FilterSelectIcon>
          </S.FilterSelect>
        )}
        </S.Filter>
    </S.CenterblockFilter>   
    <S.CenterblockContent>
        <S.ContentTitle>
          <PlaylistTitle />
        </S.ContentTitle>
        <S.ContentPlaylist>
          <Playlist dataPick={props.dataPick} playlistsNumber={props.playlistsNumber} />
        </S.ContentPlaylist>
        </S.CenterblockContent>
    </div>
    )
}
export default Centerblock