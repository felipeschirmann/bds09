import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import "./styles.css";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.imgUrl} alt={movie.title} />
      </Link>
      <h6>{movie.title}</h6>
      <p className="card-movie-year">{movie.year}</p>
      <div className="subtitle">{movie.subTitle}</div>
    </>
  );
};

export default MovieCard;
