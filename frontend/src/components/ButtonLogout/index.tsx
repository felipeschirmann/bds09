import { AuthContext } from "AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { removeAuthData } from "util/storage";
import "./styles.css";

const ButtonLogout = () => {
  let navigate = useNavigate();

  const { setAuthContextData } = useContext(AuthContext);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    navigate("/", { replace: true });
  };

  return (
    <>
      <a className="btn btn-primary btn-logout" href="/" onClick={handleLogoutClick}>
        <div className="logout">SAIR</div>
      </a>
    </>
  );
};

export default ButtonLogout;
