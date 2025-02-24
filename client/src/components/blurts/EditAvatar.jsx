import { useEffect, useState } from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import { hsvaToHex } from "@uiw/color-convert";
import { useNavigate } from "react-router-dom";
import "./styles/AfterLogin.css";
import IntroDp from "./IntroDp";


function EditAvatar() {
  const [step, setStep] = useState(1);
  const [hexcodeChosen, setHexcodeChosen] = useState({ h: 0, s: 0, v: 0, a: 1 });
  const [mode, setMode] = useState(false); // Boolean: false = Dark, true = Light
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState(name);
  const [googleId, setGoogleId] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
    console.log("User: ", user);
    if (user && user._id) {
      setGoogleId(user.googleId);
      setLoading(false);
    } else {
      console.warn("No user found in localStorage!");
      setLoading(false);
    }
  }, []);

  const handleSubmit = async () => {

    try {
      const stuff = { googleId: googleId, name, nickname, color: hsvaToHex(hexcodeChosen), mode };
      console.log(stuff);
      const response = await fetch("https://blurtpfft.vercel.app/users/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stuff),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      user.nickname = nickname;
      user.color = hsvaToHex(hexcodeChosen);
      user.mode = mode;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/blurt/main");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  const imgname = "blurt" + (step == 1 ? "one" : "two") + (mode ? "" : "dark");
  return (
    <div
      className="tryingcontainer"
      style={{
        backgroundColor: mode ? "#f5f5f5" : "#1a1a1a",
        color: mode ? "#1a1a1a" : "#f5f5f5",
      }}
    >
      {googleId && step === 1 && (
        <div className="stepone">
          {/* <label className="afterone"></label> */}
          
          {/* Fixed Color Picker */}
          <Wheel color={hexcodeChosen} onChange={(color) => setHexcodeChosen(color.hsva)} />
          <ShadeSlider
            hsva={hexcodeChosen}
            style={{ width: 210, margin: 20, transform: "rotate(90)"}}
            onChange={(newShade) => setHexcodeChosen(newShade)}
          />

          {/* <div style={{ width: "100%", height: 34, marginTop: 20, background: hexcodeChosen }}></div> */}

          {/* Fixed Mode Toggle */}
          <div 
            onClick={() => setMode((prevMode) => !prevMode)}
            className="mode-button"
            style={{
              backgroundColor: mode ? "#1A1A1A" : "#f5f5f5",
            }}
          >
            {mode ? (
              <i className="fa-solid fa-sun" style={{ color: "#f5f5f5" }}></i>
            ) : (
              <i className="fa-solid fa-moon" style={{ color: "#1A1A1A" }}></i>
            )}
          </div>

          <button className="mailbutton" onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {googleId && step === 2 && (
        <div className="step2">
          <div className="chat-container-intro">
            <div className={`message-group left`}>
              <div className="message-header">
                <img src={`/ruhi.png`} alt="dp" className="dp" />
                <span className={`sender-name ruhichat`}>Ruhi</span>
              </div>
              <div className="message-box" style={{ background: mode ? "#1A1A1A" : "#F5F5F5" , color: mode? "#f5f5f5" : "#1a1a1a"}}>
                oh god I forgot his name
              </div>
            </div>
            <div className={`message-group left`}>
              <div className="message-header">
                <img src={`/kunal.png`} alt="dp" className="dp" />
                <span className={`sender-name kunalchat`}>Kunal</span>
              </div>
              <div 
                className="message-box" 
                style={{ background: mode ? "#1A1A1A" : "#F5F5F5" , color: mode? "#f5f5f5" : "#1a1a1a"}}
              >
                wait he told his name?
              </div>

            </div>
            <div className={`message-group left`}>
              <div className="message-header">
                <img src={`/harshit.png`} alt="dp" className="dp" />
                <span className={`sender-name harshitchat`}>Harshit</span>
              </div>
              <div className="message-box" style={{ background: mode ? "#1A1A1A" : "#F5F5F5" , color: mode? "#f5f5f5" : "#1a1a1a"}}>
                remembering names is stupid, yellow girl
              </div>
            </div>
            <div className={`message-group left`}>
              <div className="message-header">
                <img src={`/bhumika.png`} alt="dp" className="dp" />
                <span className={`sender-name bhumikachat`}>Bhumika</span>
              </div>
              <div className="message-box" style={{ background: mode ? "#1A1A1A" : "#F5F5F5" , color: mode? "#f5f5f5" : "#1a1a1a"}}>
                pretty weird of you to not tell your name?
              </div>
            </div>
            <div className={`message-group right`}>
              <div className="message-header">
                <IntroDp clr={hsvaToHex(hexcodeChosen)} size="30px" />
                <span className={`sender-name`} style={{ color: `${hsvaToHex(hexcodeChosen)}` }}>{nickname}</span>
              </div>
              <div className="message-box" style={{ background: mode ? "#1A1A1A" : "#F5F5F5" , color: mode? "#f5f5f5" : "#1a1a1a"}}>
                oh. so sorry, it's 
                <input value={nickname} className="intro-input" type="text" onChange={(e) => setNickname(e.target.value)}></input>
              </div>
            </div>
          </div>
          <button className="mailbutton" onClick={handleSubmit}>next</button>
        </div>
      )}
      <div className="picdrama">  
        <div className="image-container">
          <img className="main-pic" src={`/thesecond/${imgname}.png`} alt="Main" />
          <svg className="overlay-svg" xmlns="http://www.w3.org/2000/svg" width="198" height="282" viewBox="0 0 198 282" fill="none">
            <g filter="url(#filter0_d_330_103)">
              <path d="M66.8236 80.2783L93.6979 167.371M66.8236 80.2783L16.4995 111L55.0735 151.469M66.8236 80.2783L105.999 121.999L154.999 128.999M93.6979 167.371L168.09 169.986L168.09 261.234M93.6979 167.371L181.223 155.484L116.253 240.499" stroke={hsvaToHex(hexcodeChosen)}  fill="none" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="65.4565" cy="42.2785" r="37.7469" transform="rotate(-84 65.4565 42.2785)" fill={hsvaToHex(hexcodeChosen)} />
            </g>
            <defs>
              <filter id="filter0_d_330_103" x="-0.000976562" y="4.5293" width="197.724" height="277.205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_330_103"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_330_103" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>    
      </div>

    </div>
  );
}

export default EditAvatar;
