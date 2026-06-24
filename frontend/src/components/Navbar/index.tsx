import { AuthContext } from "AuthContext";
import ButtonLogout from "components/ButtonLogout";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const { authContextData } = useContext(AuthContext);

  return (
    <>
      <nav className="bg-primary navbar-expand-md bg-primary main-nav">
        <div className="container-fluid">
          <div className="nav-navigation-itens">
            <div className="nav-container-navigation">
              <div className="nav-logo-text">
                <Link to={authContextData.authenticated ? "/movies" : "/"}>
                  <h4>MovieFlix</h4>
                </Link>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav offset-md-3 main-menu">
                  <li>
                  </li>
                </ul>
              </div>
            </div>
            {authContextData.authenticated ? <ButtonLogout /> : ""}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
