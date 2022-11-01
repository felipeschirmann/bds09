import { Movie } from "types/movie";
import "./styles.css";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <div className="card-movie">
        <img src={movie.imgUrl} alt={movie.title} />
        <h6>{movie.title}</h6>
        <p className="card-movie-year">{movie.year}</p>
        <div className="subtitle">{movie.subTitle}</div>
      </div>
    </>
  );
};

export default MovieCard;
