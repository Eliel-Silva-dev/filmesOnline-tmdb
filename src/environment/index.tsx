const Environment = {
    API_KEY: 'api_key=70662fd4135b92fe0fc87874e13356c4',
    API_URL: 'https://api.themoviedb.org/3/movie/',
    API_SEARCH: 'https://api.themoviedb.org/3/search/movie',
    API_IMG: 'https://image.tmdb.org/t/p/w500/',

    API_NOW_PLAYING:
    'https://api.themoviedb.org/3/movie/now_playing?api_key=70662fd4135b92fe0fc87874e13356c4',


};

export type Ttdmb = {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export default Environment;