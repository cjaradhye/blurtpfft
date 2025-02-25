import { Navigate } from "react-router-dom";

function NewPrivate({ children }) {
  const token = localStorage.getItem("authToken");
  return token ? children : <Navigate to="/blurt/login" />;
}

export default PrivateRoute;