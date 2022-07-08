import Login from "components/Login";
import Navbar from "components/Navbar";
import { ReactComponent as MainImage } from "assets/images/logo-front.svg";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container container-home">
        <div className="container-home-card">
          <h1>Avalie Filmes</h1>
          <p>Diga o que você achou do seu filme favorito</p>
          <MainImage />
        </div>
        <Login />
      </div>
    </>
  );
};

export default Home;
