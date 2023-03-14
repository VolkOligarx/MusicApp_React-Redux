import * as S from './style'
import SidebarItem from '../SidebarItem/SidebarItem'
import SidebarSkeleton from '../SidebarSkeleton/SidebarSkeleton'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';

const Sidebar = ({ playlists }) => {
  const [isLoading, setIsLoading] = useState(true)
  axios.get('https://painassasin.online/catalog/track/all/').then(res => {
    setIsLoading(false);
}); 

const userName = useSelector((state) => state.userName.login)
setTimeout(() => {
  const check = userName.length
  if (check > 20) {
    console.log('object');
    window.location.reload()
  }  
}, 1000);

  return (
    <div>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{userName}</S.SidebarPersonalName>
        <S.SidebarAvatar></S.SidebarAvatar>
      </S.SidebarPersonal>
    <S.SidebarBlock>
        <S.SidebarList>
          {playlists.map((playlist) =>
            isLoading ? (
              <SidebarSkeleton key={playlist.id} />
            ) : (
              <SidebarItem 
                key={playlist.id}
                id={playlist.id}
                img={playlist.img}
                link={playlist.link}
              />
            )
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </div>
  )
}

export default Sidebar