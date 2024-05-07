import { Navigate, Route, Routes } from "react-router-dom"

import { Navbar } from "../../ui"
import { DCPage, MarvelPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />}  />
        <Route path="dc" element={<DCPage />}  />

        <Route path="/" element={<Navigate to="/marvel" />}  />
      </Routes>
    </>
  )
}
