import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import "./styles.css";

type Props = {
  movie: Movie;
};

const MovieCard = React.memo(({ movie }: Props) => {
  return (
    <>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={movie.imgUrl}
          alt={movie.title}
          loading="lazy"
          width={480}
          height={710}
        />
      </Link>
      <h6>{movie.title}</h6>
      <p className="card-movie-year">{movie.year}</p>
      <div className="subtitle">{movie.subTitle}</div>
    </>
  );
});

MovieCard.displayName = "MovieCard";

export default MovieCard;
