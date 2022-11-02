import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL, requestBackend } from "util/requests";

import "./styles.css";

type Props = {
  movieId: number;
};

const MovieCard = ({ movieId }: Props) => {
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
        <Link to={`/movies/${movieId}`}>
          <img src={movie?.imgUrl} alt={movie?.title} />
        </Link>
        <h6>{movie?.title}</h6>
        <p className="card-movie-year">{movie?.year}</p>
        <div className="subtitle">{movie?.subTitle}</div>
      </div>
    </>
  );
};

export default MovieCard;
