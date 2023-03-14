import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { MusicPage } from './pages/MusicPage'
import { Error } from './pages/Error'
import Playlists from './pages/Playlists'
import { Reg } from './pages/Reg'
import UserCollection from './pages/UserCollection'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

export const AppRoutes = ({ token }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="*" element={<Error />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route path="/" element={<MusicPage />} />
        <Route path="/userCollection" element={<UserCollection />} />
        <Route path="/playlists/:id" element={<Playlists />} />
      </Route>
    </Routes>
  )
}