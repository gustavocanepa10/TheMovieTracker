import React from "react"

import { BrowserRouter, Routes, Route } from "react-router"
import { Login } from "./pages/Login"
import { HomePage } from "./pages/HomePage"
import { ContextFilmProvider } from "./context/filmContext"
import { FilmInfo } from "./pages/filmInfo"

import { FormFilm } from "./pages/Form"

function App() {
    return (
        <ContextFilmProvider>
            <BrowserRouter>

            <Routes>

            <Route index path="/" element = {<Login/>}  />

            <Route  path = 'homepage' element = {<HomePage/>}/>

            <Route  path = 'homepage/:id/:title' element = {<FilmInfo/>} />

            <Route path = '/form' element = {<FormFilm/>} />
            

           

    


            </Routes>


            </BrowserRouter>

        </ContextFilmProvider>
        
    )
}

export default App
