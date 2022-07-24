import Navbar from "components/Navbar";
import { BASE_URL, hasAnyRoles, requestBackend } from "util/requests";
import { ReactComponent as Star } from "assets/images/star.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { SpringPage } from "types/vendor/spring";
import { review } from "types/review";
import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const [page, setPage] = useState<SpringPage<review>>();

  const { movieId } = useParams<UrlParams>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `${BASE_URL}/movies/${movieId}/reviews`,
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };
    requestBackend(params).then((response) => {
      const result: SpringPage<review> = {
        content: response.data,
        last: true,
        totalElements: 0,
        totalPages: 0,
        size: 0,
        number: 0,
        first: true,
        empty: false,
      };
      setPage(result);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-movie-details">
        <h2>Tela detalhes do filme id: {movieId}</h2>
        {hasAnyRoles(["ROLE_MEMBER"]) && (
          <div className="container-evaluation">
            <form>
              <input
                type="text"
                placeholder="Deixe sua avaliação aqui"
                className="form-control"
              />
              <div className="text-center">
                <button className="btn btn-primary form-control">
                  <h6>SALVAR AVALIAÇÃO</h6>
                </button>
              </div>
            </form>
          </div>
        )}

        {page?.content.map((comment) => (
          <div className="container-comments">
            <div className="comments-title">
              <Star />
              <p>{comment.user.name}</p>
            </div>
            <textarea
              key={comment.id}
              name="comments"
              id=""
              readOnly
              value={comment.text}
            ></textarea>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieDetails;
