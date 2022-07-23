import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { requestBackendLogin } from "util/requests";
import { saveAuthData } from "util/storage";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const [hasError, setError] = useState(false);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onsubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((reponse) => {
        saveAuthData(reponse.data);
        console.log("Login...");
        navigate("/movies", { replace: true });
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <>
      <div className="container-login">
        <form onSubmit={handleSubmit(onsubmit)}>
          <h1>LOGIN</h1>
          {hasError && (
            <div className="alert alert-danger">Erro ao efetuar o login!!!</div>
          )}
          <input
            {...register("username", {
              required: "Campo Obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            name="username"
            type="text"
            placeholder="Email"
            className={`form-control base-input ${ errors.username ? 'is-invalid' : '' }`}
          />
          <div className="invalid-feedback d-block msg-invalid">
            {errors.username?.message}
          </div>

          <input
            {...register("password", { required: "Campo Obrigatório" })}
            name="password"
            type="password"
            placeholder="Senha"
            className={`form-control base-input ${ errors.password ? 'is-invalid' : '' }`}
          />
          <div className="invalid-feedback d-block msg-invalid">
            {errors.password?.message}
          </div>

          <button className="btn btn-primary form-control">
            <h5>FAZER LOGIN</h5>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
