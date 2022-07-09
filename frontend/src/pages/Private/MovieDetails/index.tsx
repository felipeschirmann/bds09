import Navbar from "components/Navbar";
import "./styles.css";
import { ReactComponent as Star } from "assets/images/star.svg";

const MovieDetails = () => {
  return (
    <>
      <Navbar />
      <div className="container-movie-details">
        <h2>Tela detalhes do filme id: 1</h2>
        <div className="container-evaluation">
          <form>
            <input
              type="text"
              placeholder="Deixe sua avaliação aqui"
              className="form-control"
            />
            <div className="text-center">
              <button className="btn btn-primary form-control">
                <h6>SALVAR AVALIAÇÃO</h6>
              </button>
            </div>
          </form>
        </div>
        <div className="container-comments">
          <div className="comments-title">
            <Star />
            <p>Maria Silva</p>
          </div>
          <textarea
            name="comments"
            id=""
            readOnly
            value={
              "Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco."
            }
          ></textarea>
          <div className="comments-title">
            <Star />
            <p>Maria Silva</p>
          </div>
          <textarea
            name="comments"
            id=""
            readOnly
            value={
              "Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco."
            }
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
