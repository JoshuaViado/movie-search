export interface IMovieByNameResponse {
  description: IMovie[];
  error_code: number;
  ok: boolean;
}

export interface IMovie {
  actors: string;
  aka: string;
  imdb_id: string;
  imdb_url: string;
  img_poster: string;
  rank: number;
  title: string;
  year: number;
  photo_height: number;
  photo_width: number;
}
