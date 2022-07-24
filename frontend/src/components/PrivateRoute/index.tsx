import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "util/requests";

function PrivateRoute({ children }: { children: JSX.Element }) {
  let location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default PrivateRoute;
