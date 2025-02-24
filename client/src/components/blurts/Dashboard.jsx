import { useState, useEffect } from "react";
import "./styles/Dashboard.css";
import Blurt from "./Blurt";
import Dp from "./Dp";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [logoClick, setLogoClick] = useState(false);
  const [stuff, setStuff] = useState({});
  const [blurts, setBlurts] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Fetching data for:");
        const response = await fetch(`https://blurtpfft.vercel.app/blurts/`);
        if (response.ok) {
          const get_blurts = await response.json();
          console.log("User Data:", get_blurts);
          setBlurts(get_blurts || []);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    const user = JSON.parse(localStorage.getItem("user"));
    setStuff(user);
    console.log(user);
    setLoading(false);
    // localStorage.setItem("user", JSON.stringify(user));
  }, []);

  function handleLogoClick() {
    setLogoClick((prev) => !prev);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="blurt-main" style={{backgroundColor: stuff.mode? "#F5f5f5" : "#1a1a1a"}}>
      <div className="filler"></div>
      <div className="blurt-header">
        <div className="blurtbutton-container">
          <div
            className="blurtbutton"
            onClick={handleLogoClick}
            style={{
              boxShadow: logoClick
                ? "0px 2px 1px 2px rgba(0, 0, 0, 0.25) inset"
                : "none",
            }}
          >
            <img className="logo-button" src="/blurt.png" alt="Blurt Logo" />
          </div>
        </div>
        <Dp clr={stuff.color} mode={stuff.mode} />
      </div>
      <div className="blurt-dashboard" style={{ display: logoClick ? "none" : "flex" }}>
        <div className="people">
          <div className="dashbox kunalbox"></div>
          <div className="dashbox bhumikabox"></div>
        </div>
        <div className="people">
          <div className="dashbox ruhibox"></div>
          <div className="dashbox harshitbox"></div>
        </div>
      </div>
      
      <div className="blurts" style={{ display: logoClick ? "flex" : "none" }}>
        {blurts.map((a, index) => (
          <Blurt
            user_id={stuff._id}
            mode={stuff.mode}
            heading={a.blurt_name}
            content={a.content}
            date={a.createdAt}
            link={a.link}
          />
        ))}
      </div>
    </div>
  );
}
