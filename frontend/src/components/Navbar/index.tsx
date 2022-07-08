import './styles.css';
const Navbar = () => {
  return (
    <>
      <nav className="bg-primary navbar-expand-md bg-primary main-nav">
        <div className="container-fluid">
          <div className="nav-logo-text">
            <a href="/">
              <h4>MovieFlix</h4>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav offset-md-3 main-menu">
              <li>
                <a href="/" className='active' >HOME</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;