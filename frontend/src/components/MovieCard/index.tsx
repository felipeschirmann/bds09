import "./styles.css";

type Props = {
  movieid: number;
};

const MovieCard = ({ movieid }: Props) => {
  const movie = {
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
