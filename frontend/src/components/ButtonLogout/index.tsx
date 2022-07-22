import { AuthContext } from "AuthContext";
import { useContext } from "react";
import history from "util/history";
import { removeAuthData } from "util/storage";
import "./styles.css";

const ButtonLogout = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace("/");
  };

  return (
    <>
      <a className="btn btn-primary btn-logout" onClick={handleLogoutClick}>
        <h6>SAIR</h6>
      </a>
    </>
  );
};

export default ButtonLogout;
