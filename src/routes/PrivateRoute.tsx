import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/AuthProvider";

const PrivateRoute = () => {
  const auth = useAuth();
  if (auth.token === "") return <Navigate to="/login" />;
  if (auth.token) return <Outlet />;
};

export default PrivateRoute;
