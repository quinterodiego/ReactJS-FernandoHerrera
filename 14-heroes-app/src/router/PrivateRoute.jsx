import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

  const { authState } = useContext(AuthContext)
  const { pathname, search } = useLocation()

  const lastPath = pathname + search
  localStorage.setItem('lastpath', lastPath)

  return ( authState.logged ) ? children : <Navigate to={'/login'} />
}

export default PrivateRoute