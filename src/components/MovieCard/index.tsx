'use client';

import style from './style.min.module.css';

import Environment from '@/environment';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const imagesURL = Environment.API_IMG;

type PropsMovieCard = {
  poster_path: string;
  vote_average: number;
  title: string;
  id_movie: number;
  showLink?: boolean;
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
      <img src={imagesURL + poster_path} alt={title} />

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
