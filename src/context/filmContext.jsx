import { createContext, useState, useEffect, useContext } from "react";

import axios from "axios";

// Criação do contexto
export const FilmContext = createContext({});

export function ContextFilmProvider({ children }) {
  const [currentFilm, setCurrentFilm] = useState({});
  const [movies, setMovies] = useState([]);
  const [moviesSearched, setMoviesSearched] = useState(""); // Corrigido o nome da função de set


  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      headers: {
        accept: "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDk4M2EzZjk1MTE3ODcyMjJiMzJiM2Q5ZmFlZTQzYSIsIm5iZiI6MTc0NTY3MjUwMC45MTIsInN1YiI6IjY4MGNkOTM0MWI4NmVhNWFmODgwZGUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LgP3X3HiOR0BFSASLAp48jwcHs4cyv34_M8oMM7yoNk",
      },
      params: {
        language: "pt-BR",
      },
    })
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function getFilm(id) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=pt-BR `,
        {
          headers: {
            accept: "application/json",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDk4M2EzZjk1MTE3ODcyMjJiMzJiM2Q5ZmFlZTQzYSIsIm5iZiI6MTc0NTY3MjUwMC45MTIsInN1YiI6IjY4MGNkOTM0MWI4NmVhNWFmODgwZGUyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LgP3X3HiOR0BFSASLAp48jwcHs4cyv34_M8oMM7yoNk",
          },
          
          

        }
      );
      const data = await res.json();
      setCurrentFilm(data);
    } catch (error) {
      console.error("Erro ao buscar o filme:", error);
    }
  }

  return (
    <FilmContext.Provider
      value={{
        movies,
        setMovies,
        currentFilm,
        setCurrentFilm,
        moviesSearched,
        setMoviesSearched,
        getFilm,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
}


export function useFilm() {
    const context = useContext(FilmContext)

    return context
}
