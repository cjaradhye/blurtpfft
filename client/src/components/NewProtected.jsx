import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewPrivate({ children }) {
  console.log("here");
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/blurt/login");
    }
  }, [token, navigate]);

  return token ? children : null;
}

export default NewPrivate;
