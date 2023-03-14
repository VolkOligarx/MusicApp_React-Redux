import * as S from '../SidebarItem/style'

const SidebarSkeleton = () => {
    return (
        <S.SidebarItem>
            <S.SidebarLink href="http://">
                <S.SidebarImg src="img/skeletonSide.svg" alt="day's playlist" />
            </S.SidebarLink>
        </S.SidebarItem>
    )
  }

export default SidebarSkeleton