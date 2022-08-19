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

  return (
    <>
      <Navbar />
      <div className="container-movie-details">
        <h2>Tela detalhes do filme id: {movieId}</h2>
        {hasAnyRoles(["ROLE_MEMBER"]) && movieId ? <ReviewForm movieId={movieId} /> : "" }

        <ReviewListing reviews={reviews} />
      </div>
    </>
  );
};

export default MovieDetails;
