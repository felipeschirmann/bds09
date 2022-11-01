import Navbar from "components/Navbar";
import ReviewListing from "components/ReviewListing";
import ReviewForm from "components/ReviewForm";
import { review } from "types/review";
import { BASE_URL, hasAnyRoles, requestBackend } from "util/requests";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `${BASE_URL}/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
      console.log(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <>
      <Navbar />
      <div className="container-movie-details">
        <div className="card-movie-details">
          <img
            src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
            alt=""
          />
          <h6>Bob Esponja</h6>
          <p className="card-movie-year">2020</p>
          <div className="subtitle-details">O Incrível Resgate</div>
          <div className="description">
            Onde está Gary? Segundo Bob Esponja, Gary foi "caracolstrado"
            pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic
            City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao
            querido amigo, e nesta jornada os dois vão conhecer novos
            personagens e viver inimagináveis aventuras.
          </div>
        </div>
        {hasAnyRoles(["ROLE_MEMBER"]) && movieId ? (
          <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
        ) : (
          ""
        )}

        <ReviewListing reviews={reviews} />
      </div>
    </>
  );
};

export default MovieDetails;
