import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
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
  const [pageSize, setPageSize] = useState(() => window.innerWidth >= 992 ? 8 : 4);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterGenre: null,
    });

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth >= 992 ? 8 : 4;
      if (newSize !== pageSize) {
        setPageSize(newSize);
        setControlComponentsData((prev) => ({
          ...prev,
          activePage: 0,
        }));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pageSize]);

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
        size: pageSize,
        genreId: controlComponentsData.filterGenre?.id,
      },
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData, pageSize]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Filter onSubmitFilter={handleSubmitFilter} />
        <div className="cards">
          {page?.content.map((movie) => (
            <div key={movie.id} className="card-movie">
              <MovieCard movie={movie} />
            </div>
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
