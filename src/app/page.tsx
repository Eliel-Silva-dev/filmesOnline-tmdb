'use client';

import style from './page.module.css';

import { useEffect, useState } from 'react';
import MovieCard from '@/components/MovieCard';
import {tmdb_api, Ttdmb } from '@/environment';

const movie_playing_now = tmdb_api.API_NOW_PLAYING;

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const plying_now = `${movie_playing_now}&language=pt-BR`;
    getTopRatedMovies(plying_now);
  }, []);

  return (
    <main className={style.main}>
      <h2 className={style.title}>Filmes em alta:</h2>
      <div className={style.movies_container}>
        {topMovies.length > 0 &&
          topMovies.map((movie: Ttdmb) => (
            <MovieCard
              key={movie.id}
              id_movie={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
            />
          ))}
      </div>
    </main>
  );
}
