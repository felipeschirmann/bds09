import Login from "components/Login";
import Navbar from "components/Navbar";
import { ReactComponent as MainImage } from "assets/images/logo-front.svg";
import "./styles.css";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "util/requests";

const Home = () => {
  if (isAuthenticated()) {
    return <Navigate to="/movies" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="container container-home">
        <div className="container-home-card">
          <h1>Avalie Filmes</h1>
          <p>Diga o que você achou do seu filme favorito</p>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <Login />
      </div>
    </>
  );
};

export default Home;
