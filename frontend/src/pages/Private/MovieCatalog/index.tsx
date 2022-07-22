import Navbar from "components/Navbar";
import { Link } from "react-router-dom";
import "./styles.css";

const MovieCatalog = () => {
  return (
    <>
      <Navbar/>
      <h1>Tela listagem de filmes</h1>
      <ul>
        <li><Link to="/movies/1">Acessar /movies/1</Link></li>
        <li><Link to="/movies/2">Acessar /movies/2</Link></li>
      </ul>
    </>
  );
};

export default MovieCatalog;
