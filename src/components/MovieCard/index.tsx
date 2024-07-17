'use client';

import style from './style.min.module.css';

import { tmdb_api } from '@/environment';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const imagesURL = tmdb_api.API_IMG_w342;

type PropsMovieCard = {
  poster_path: string;
  vote_average: number;
  title: string;
  overview?: string;
  id_movie: number;
  showLink?: boolean;
  vote_count?: number;
};
const MovieCard = ({
  poster_path,
  vote_average,
  title,
  id_movie,
  showLink = true,
}: PropsMovieCard) => {
  return (
    <div className={style.movie_card}>
      <img
        src={poster_path ? imagesURL + poster_path : 'img/ilustrativa.jpg'}
        alt={title}
      />

      <h2>{title}</h2>

      <p>
        <FaStar /> {vote_average}
      </p>

      {showLink && (
        <Link
          href={{
            pathname: '/movie',
            query: { id: id_movie },
          }}
        >
          Detalhes
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
