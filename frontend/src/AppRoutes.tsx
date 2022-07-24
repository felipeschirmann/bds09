import PrivateRoute from "components/PrivateRoute";
import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetails from "pages/Private/MovieDetails";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/movies"
        element={
          <PrivateRoute>
            <MovieCatalog />
          </PrivateRoute>
        }
      />
      <Route path="/movies">
        <Route
          path=":movieId"
          element={
            <PrivateRoute>
              <MovieDetails />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
