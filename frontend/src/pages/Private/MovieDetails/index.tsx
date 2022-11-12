import Navbar from "components/Navbar";
import ReviewListing from "components/ReviewListing";
import ReviewForm from "components/ReviewForm";
import { Review } from "types/review";
import { Movie } from "types/movie";
import { BASE_URL, hasAnyRoles, requestBackend } from "util/requests";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import { toast } from "react-toastify";

import "./styles.css";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `${BASE_URL}/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
      toast.success("Salvo!!!");
      console.log(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `${BASE_URL}/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
  }, [movieId]);

  return (
    <>
      <Navbar />
      <div className="container-movie-details">
        <div className="card-movie-details">
          {movie ? <MovieCard movie={movie} /> : ""}
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
