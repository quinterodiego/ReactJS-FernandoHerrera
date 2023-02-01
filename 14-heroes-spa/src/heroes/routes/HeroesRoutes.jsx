
import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { MarvelPage, DCPage, SearchPage, HeroPage } from './../index'

export const HeroesRoutes = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DCPage />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path='hero/:heroId' element={<HeroPage />} />
                    <Route path='/' element={<Navigate to='/marvel' />} />
                </Routes>
            </div>
        </>
    )
}
