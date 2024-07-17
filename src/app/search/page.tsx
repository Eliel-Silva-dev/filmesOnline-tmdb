'use client';

import style from './style.min.module.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { tmdb_api, Ttdmb } from '@/environment';
import MovieCard from '@/components/MovieCard';

const SearchMovie = () => {
  const searchParams = useSearchParams();
  const TMDB = tmdb_api;

  const [movieSearch, setMovieSearch] = useState([]);

  const getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovieSearch(data.results);
  };

  const query = searchParams.get('q');

  useEffect(() => {
    const urlSearchMovie = `${TMDB.API_MOVIE_SEARCH}?query=${query}&${TMDB.API_KEY}${TMDB.API_LANG}`;
    getMovie(urlSearchMovie);
  }, [query]);

  return (
    <main className={style.main}>
      <section>
        <div className={style.container_search}>
          {movieSearch &&
            movieSearch.map((movie: Ttdmb) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                title={movie.title}
                vote_count={movie.vote_count}
                overview={movie.overview}
                id_movie={movie.id}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default SearchMovie;
