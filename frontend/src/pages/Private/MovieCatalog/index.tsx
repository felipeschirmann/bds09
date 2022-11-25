import { AxiosRequestConfig } from "axios";
import MovieCardListing from "components/MovieCardListing";
import Navbar from "components/Navbar";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import Filter from "components/Filter";

import "./styles.css";
import { Genre } from "types/genre";

type ControlComponentsData = {
  activePage: number;
  filterGenre: Genre | null;
};

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterGenre: null,
    });

  const handleSubmitFilter = (data: Genre) => {
    setControlComponentsData({
      activePage: 0,
      filterGenre: data,
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterGenre: controlComponentsData.filterGenre,
    });
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies`,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterGenre?.id,
      },
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Filter onSubmitFilter={handleSubmitFilter} />
        <div className="cards">
          {page?.content.map((movie) => (
            <MovieCardListing key={movie.id} movieId={movie.id} />
          ))}
        </div>
        <Pagination
          forcePage={page?.number}
          onChange={handlePageChange}
          pageCount={page ? page?.totalPages : 0}
          range={3}
        />
      </div>
    </>
  );
};

export default MovieCatalog;
