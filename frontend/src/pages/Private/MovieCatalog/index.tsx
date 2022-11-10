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

type ControlComponentsData = {
  activePage: number;
};

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies`,
      params: {
        page: controlComponentsData.activePage,
        size: 3,
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
      <Filter />
      <div className="cards">
        {page?.content.map((movie) => (
          <MovieCardListing key={movie.id} movieId={movie.id} />
        ))}
      </div>
      <Pagination
        onChange={handlePageChange}
        pageCount={page ? page?.totalPages : 0}
        range={3}
      />
    </>
  );
};

export default MovieCatalog;
