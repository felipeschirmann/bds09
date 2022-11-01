import "./styles.css";

const MovieCard = () => {
  return (
    <>
      <div className="card-movie">
        <img
          src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
          alt=""
        />
        <h6>Bob Esponja</h6>
        <p className="card-movie-year">2020</p>
        <div className="subtitle">O Incrível Resgate</div>
      </div>
    </>
  );
};

export default MovieCard;
