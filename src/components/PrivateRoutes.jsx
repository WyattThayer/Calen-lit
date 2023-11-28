import { useLocation, Outlet, Navigate } from "react-router-dom";
import store from "../store";
import { useSelector } from "react-redux";

export const PrivateRoutes = () => {
  const isAuth = useSelector((state) => state.isAuth);
  console.log(
    "🚀 ~ file: PrivateRoutes.jsx:7 ~ PrivateRoutes ~ isAuth:",
    isAuth
  );
  const location = useLocation();

  if (isAuth === undefined) {
    return null; // or loading indicator/spinner/etc
  }

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
