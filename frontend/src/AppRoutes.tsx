import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetails from "pages/Private/MovieDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "util/requests";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/movies"
        element={isAuthenticated() ? <MovieCatalog /> : <Navigate to="/"/>}
      />
      <Route
        path="/movies/:moviesId"
        element={isAuthenticated() ? <MovieDetails /> : <Navigate to="/"/>}
      />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
