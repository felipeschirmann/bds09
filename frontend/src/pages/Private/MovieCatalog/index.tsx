import MovieCard from "components/MovieCard";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";

import "./styles.css";

const MovieCatalog = () => {
  const m = {
    id: 1,
    title: "Bob Esponja",
    subTitle: "O Incrível Resgate",
    year: 2020,
    imgUrl:
      "https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    synopsis:
      'Onde está Gary? Segundo Bob Esponja, Gary foi "caracolstrado" pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois vão conhecer novos personagens e viver inimagináveis aventuras.',
  };

  return (
    <>
      <Navbar />
      <p>Filtro</p>
      <div className="cards">
        <MovieCard movie={m} />
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
