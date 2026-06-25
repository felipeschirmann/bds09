import { lazy, Suspense } from "react";
import PrivateRoute from "components/PrivateRoute";
import Loading from "components/Loading";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const MovieCatalog = lazy(() => import("pages/Private/MovieCatalog"));
const MovieDetails = lazy(() => import("pages/Private/MovieDetails"));

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default AppRoutes;
