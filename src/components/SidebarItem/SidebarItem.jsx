import * as S from './style'

const SidebarItem = (props) => {
    return (
        <S.SidebarItem>
        <S.SidebarLink /*onClick={navigate(`/playlists/${props.id}`)}*/ href={props.link}>
          <S.SidebarImg
            src={props.img}
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    )
  }
  
  export default SidebarItem

  
