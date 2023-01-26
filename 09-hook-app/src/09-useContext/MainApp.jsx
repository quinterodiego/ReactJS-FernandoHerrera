import { UserProvider } from './context/UserProvider'
import { Navigate, Routes, Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { NavBar } from './NavBar'

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />
            <hr />
            
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='login' element={<LoginPage />}/>
                <Route path='about' element={<AboutPage />}/>
                <Route path='/*' element={<Navigate to='login' />}/>
            </Routes>
        </UserProvider>
    )
}
