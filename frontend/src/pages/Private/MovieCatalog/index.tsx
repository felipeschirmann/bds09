import MovieCard from "components/MovieCard";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";

import "./styles.css";

const MovieCatalog = () => {

  return (
    <>
      <Navbar />
      <p>Filtro</p>
      <div className="cards">
        <MovieCard movieid={1} />
      </div>
      <ul>
        <li>
          <Link to="/movies/1">Acessar /movies/1</Link>
        </li>
        <li>
          <Link to="/movies/2">Acessar /movies/2</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieCatalog;
