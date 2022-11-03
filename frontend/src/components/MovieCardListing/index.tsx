import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import { Movie } from "types/movie";
import { BASE_URL, requestBackend } from "util/requests";

import "./styles.css";

type Props = {
  movieId: number;
};

const MovieCardListing = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `${BASE_URL}/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
  }, [movieId]);

  return (
    <>
      <div key={movie?.id} className="card-movie">
        {movie ? <MovieCard movie={movie} /> : ""}
      </div>
    </>
  );
};

export default MovieCardListing;
