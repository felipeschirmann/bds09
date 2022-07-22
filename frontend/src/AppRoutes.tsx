import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetails from "pages/Private/MovieDetails";
import { Route, Routes } from "react-router-dom";
import { isAuthenticated } from "util/auth";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="movies"
        element={isAuthenticated() ? <MovieCatalog /> : <Home />}
      />
      <Route path="movies">
        <Route
          path=":moviesId"
          element={isAuthenticated() ? <MovieDetails /> : <Home />}
        />
      </Route>
      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
}

export default AppRoutes;
