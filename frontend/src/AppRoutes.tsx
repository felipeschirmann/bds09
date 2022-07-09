import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetails from "pages/Private/MovieDetails";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<MovieCatalog />}>
          <Route path=":moviesId" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
  );
}

export default AppRoutes;
