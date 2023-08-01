import { Navigate, Route, Routes } from "react-router-dom"

import { Navbar } from "../../ui"
import { MarvelPage, DCPage, Search, Hero } from './../';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path='/' element={<Navigate to='marvel' />} />
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DCPage />} />
                    <Route path='search' element={<Search />} />
                    <Route path='hero/:id' element={<Hero />} />
                </Routes>
            </div>
        </>
    )
}
