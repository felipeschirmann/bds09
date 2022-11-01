import { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { review } from "types/review";
import { requestBackend } from "util/requests";
import "./styles.css";

type Props = {
  movieId: string;
  onInsertReview: (review: review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
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
        setValue('text','');
        onInsertReview(response.data);
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
            <h5>SALVAR AVALIAÇÃO</h5>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
