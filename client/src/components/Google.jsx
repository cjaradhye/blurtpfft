import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Google() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    if (token) {
      localStorage.setItem("authToken", token);
      window.history.replaceState(null, "", window.location.pathname);
  
      fetch("https://blurtpfft.vercel.app/auth/google/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((userData) => {
          console.log(userData);
          if (userData.name) {  // Fix: Check 'name' instead of 'googleId'
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/trying");
          }
        })
        .catch((error) => console.error("Error fetching user info:", error));
    }
  }, []); // Fix: Added empty array
  
  

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className="mailpage">
      <h1 className="mailone">
        curious? <br /> well, blurt is a click away
      </h1>

      <button onClick={handleGoogleLogin} className="mailtwo">
        Google
      </button>

      <p className="mailthree">already knows everything about you.</p>
      <p className="mailfour">might as well use it</p>
    </div>
  );
}
