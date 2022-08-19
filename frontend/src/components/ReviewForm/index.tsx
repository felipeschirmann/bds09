import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { requestBackend } from "util/requests";

type Props = {
  movieId: string;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/reviews",
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        console.log("Salvo", response);
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  };

  return (
    <div className="container-evaluation">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("text", {
            required: "Campo Obrigatório",
          })}
          type="text"
          placeholder="Deixe sua avaliação aqui"
          className="form-control"
        />
        {errors.text?.message}
        <div className="text-center">
          <button className="btn btn-primary form-control">
            <h6>SALVAR AVALIAÇÃO</h6>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
