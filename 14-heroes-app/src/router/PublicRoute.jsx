import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {

  const { authState } = useContext(AuthContext)

  console.log('autState', authState)

  return ( !authState.logged ) ? children : <Navigate to={'/marvel'} />
}

export default PublicRoute