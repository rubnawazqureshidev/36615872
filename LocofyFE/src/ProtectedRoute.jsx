import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";

const ProtectedRoute = ({ children }) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
