import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login', isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}