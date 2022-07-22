import { AuthContext } from "AuthContext";
import ButtonLogout from "components/ButtonLogout";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTokenData } from "util/auth";
import history from "util/history";
import { isAuthenticated } from "util/requests";
import { removeAuthData } from "util/storage";
import "./styles.css";

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  return (
    <>
      <nav className="bg-primary navbar-expand-md bg-primary main-nav">
        <div className="container-fluid">
          <div className="nav-navigation-itens">
            <div className="nav-container-navigation">
              <div className="nav-logo-text">
                <Link to="/">
                  <h4>MovieFlix</h4>
                </Link>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav offset-md-3 main-menu">
                  <li><a href="#" className="active"></a></li>
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
