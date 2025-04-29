import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useFilm } from "@/context/filmContext";
import { Card, CardContent, CardTitle } from "../components/ui/card";

export function FilmInfo() {
  const { id } = useParams();
  const { getFilm, currentFilm } = useFilm();

  useEffect(() => {
    if (id) {
      getFilm(id);
    }
  }, [id]);

  const { title, overview, poster_path } = currentFilm;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center p-6 md:p-12">
      <Card className="max-w-5xl w-full bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="w-full p-8 md:w-1/3 h-auto object-cover"
          />
        )}

        <CardContent className="p-6 md:p-8 flex flex-col justify-center gap-4 md:w-2/3">
          <CardTitle className="text-3xl font-bold text-gray-900">{title}</CardTitle>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            {overview}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
