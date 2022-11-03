import { AxiosRequestConfig } from "axios";
import MovieCardListing from "components/MovieCardListing";
import Navbar from "components/Navbar";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";

import "./styles.css";

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies`,
      params: {
        size: 4,
        page: 0,
      },
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <p>Filtro</p>
      <div className="cards">
        {page?.content.map((movie) => (
          <MovieCardListing key={movie.id} movieId={movie.id} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default MovieCatalog;
