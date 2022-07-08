import ButtonLogout from "components/ButtonLogout";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary navbar-expand-md bg-primary main-nav">
        <div className="container-fluid">
          <div className="nav-navigation-itens">
            <div className="nav-container-navigation">
              <div className="nav-logo-text">
                <a href="/">
                  <h4>MovieFlix</h4>
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav offset-md-3 main-menu">
                  <li>
                    <a href="/" className="active"></a>
                  </li>
                </ul>
              </div>
            </div>
            <ButtonLogout />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
