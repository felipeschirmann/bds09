import Navbar from "components/Navbar";
import ReviewListing from "components/ReviewListing";
import ReviewForm from "components/ReviewForm";
import { Review } from "types/review";
import { Movie } from "types/movie";
import { hasAnyRoles, requestBackend } from "util/requests";
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
    const movieConfig: AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    const reviewsConfig: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    Promise.all([
      requestBackend(movieConfig),
      requestBackend(reviewsConfig),
    ]).then(([movieResponse, reviewsResponse]) => {
      setMovie(movieResponse.data);
      setReviews(reviewsResponse.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
    toast.success("Salvo!!!");
  };

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
