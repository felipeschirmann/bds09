import "./styles.css";
const Login = () => {
  return (
    <>
      <div className="container-login">
        <form>
          <h1>LOGIN</h1>
          <input type="text" placeholder="Email" className="form-control" />
          <input type="password" placeholder="Senha" className="form-control" />
          <button className="btn btn-primary form-control">
            <h5>FAZER LOGIN</h5>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
