import { Navigate, Route, Routes } from 'react-router-dom'

import { MarvelPage, DCPage } from './../heroes'
import { LoginPage } from '../auth'
import { NavBar } from '../ui'

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DCPage />} />        
        
        <Route path='login' element={<LoginPage />} />

        <Route path='/*' element={<Navigate to='marvel' />} />
      </Routes>
    </>
  )
}
