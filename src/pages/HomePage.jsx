import React, { useEffect, useState } from "react"
import Icone from "../assets/icone2.png"
import { Input } from "@/components/ui/input"
import {useNavigate} from "react-router"
import {Link} from "react-router"

import { Card } from "@/components/ui/card"
import { useFilm } from "@/context/filmContext"



export function HomePage() {

  const {movies, moviesSearched, setMoviesSearched} = useFilm()
  


  const filteredMovies = moviesSearched.length > 0 ? movies.filter((movie) => 

    `${movie.title}`.toLowerCase().includes(moviesSearched.toLowerCase())
  ): movies



  return (
    <div className="w-screen h-screen flex flex-col font-sans ">
      <div className="w-screen h-screen flex items-center gap-25">
        <img className="w-max h-max p-20" src={Icone} alt="" />
        <Input value = {moviesSearched}  onChange = {(e) => setMoviesSearched(e.target.value)  } placeholder="🔍Search a movie or a series" className="w-96 h-8 ml-100" />
        <Link to = "/form"  className =  "bg-white shadow-lg font-semibold text-center rounded-md m-4  w-48 h-8">
        Adicionar um novo filme</Link>
      
      </div>



      

      <div className="grid grid-cols-3 p-10     gap-6">
        {filteredMovies.map((movie) => (
          
          

            <Link to={`${movie.id}/${encodeURIComponent(movie.title)} `} key = {movie.id}   >
            <Card className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">

              <img
                className="w-full md:w-1/3 h-auto object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="flex flex-col justify-center text-left md:w-2/3">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{movie.title}</h1>
                <p className="text-gray-600 text-base leading-relaxed">
                  {movie.overview}
                </p>
              </div>

              </Card>

          </Link>
            

          
          
          
          
        ))}
      </div>

      </div>
      
      
      
    
  )
}
