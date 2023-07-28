import { Navigate, Route, Routes } from 'react-router-dom'

import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DCPage } from '../heroes/pages/DCPage'
import { LoginPage } from '../auth/pages/LoginPage'
import { Navbar } from '../ui/components'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Navigate to='marvel' />} />
                <Route path='marvel' element={<MarvelPage />} />
                <Route path='dc' element={<DCPage />} />
                <Route path='login' element={<LoginPage />} />
            </Routes>
        </>
    )
}
