import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Settings.css"; // Import the CSS file
import DownloadButton from "../image-converter/Download";

const Settings = (comps) => {
  const [tapTalk, setTapTalk] = useState(true);
  const [name, setName] = useState("");
  const [autoTalk, setAutoTalk] = useState(true);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [feedback, setFeedback] = useState({ positive: "", negative: "" });
  const user = JSON.parse(localStorage.getItem("user"));
  
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    setTapTalk(user.settings.tapTalk);
    setAutoTalk(user.settings.automaticTalk.main);
    setIntervalTime(user.settings.automaticTalk.speed);
    setName(user.nickname);
  }, []);

  const handleAvatar = async (e) => {
    navigate("/blurt/edit-avatar");
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/blurt");
  }

  const feedbackSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://blurtpfft.vercel.app/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });
    const data = await response.json();
    console.log(data.message || "Error submitting feedback");
  };

  const chatSubmit = async (e) => {
    e.preventDefault();
    try {
      const settings = {
        tapTalk : tapTalk,
        automaticTalk : {
          main: autoTalk,
          speed: intervalTime
        },
      }
      user.settings = settings;
      console.log(user);
      const response = await fetch("https://blurtpfft.vercel.app/users/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <div className="settings-container">
      <div className="style-in-settings">
        <div className="style-pic">
              <div className="style-text">
                  <h4>certified blurt contributor</h4>
                  <h1>{name}</h1>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="469" height="1713" viewBox="0 0 469 1713" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M229.977 311.002C250.922 310.815 270.448 321.564 281.493 339.36L392.653 518.469L394.491 518.044C426.776 510.576 459.002 530.693 466.47 562.978C470.984 582.491 465.42 601.983 453.183 615.999L458.993 625.36C471.775 645.956 470.91 672.218 456.799 691.927C442.689 711.636 418.107 720.919 394.491 715.456L290.513 691.404V905.474L460.482 1211.9C473.13 1234.7 469.604 1263.06 451.758 1282.07L313.758 1429.07C300.966 1442.69 283.311 1449.01 266.013 1447.87V1652.5C266.013 1685.64 239.15 1712.5 206.013 1712.5C172.876 1712.5 146.013 1685.64 146.013 1652.5V1281.5C146.013 1280.14 146.059 1278.79 146.151 1277.43L170.513 918.964V693.023L73.5356 715.456C50.11 720.875 25.7118 711.786 11.5411 692.362C-2.62958 672.937 -3.83566 646.929 8.47651 626.276L14.7008 615.835C2.56359 601.831 -2.93931 582.415 1.55694 562.978C8.98868 530.851 40.9375 510.772 73.0636 517.936L178.977 340.276C189.702 322.285 209.033 311.189 229.977 311.002ZM276.599 1127.78L266.013 1283.54V1304.6L334.319 1231.84L276.599 1127.78Z" fill={comps.clr}/>
                  <path d="M435.633 201.81C435.633 313.266 345.279 403.619 233.823 403.619C122.367 403.619 32.0133 313.266 32.0133 201.81C32.0133 90.3532 122.367 0 233.823 0C345.279 0 435.633 90.3532 435.633 201.81Z" fill={comps.clr}/>
              </svg>
              <img src="blurtlogo-dark.png"></img>
        </div>
      </div>
      
      <p className="linktochange" onClick={handleAvatar}>change avatar</p>
      <DownloadButton 
        title={name}
        subtitle="certified blurt contributor"
        color={comps.clr}
        mode={comps.mode}
      />
      <hr className="settings-line"></hr>

      <h3 className="settings-heading">
        Chat Settings
      </h3>
      <div className="settings-section">
        <label>
          <input type="checkbox" onChange={() => setTapTalk(prev => !prev)} checked={tapTalk} /> TapTalk
        </label>
        <label>
          <input type="checkbox" checked={autoTalk} onChange={() => setAutoTalk(prev => !prev)} /> AutomaticTalk
        </label>
        {autoTalk && (
          <input type="range" min="500" max="5000" step="500" value={intervalTime} onChange={e => setIntervalTime(Number(e.target.value))} />
        )}
        <button className="submit-feedback" onClick={chatSubmit} type="submit" >save</button>
      </div>
      <br></br>
      <hr className="settings-line"></hr>
      <h3 className="settings-heading">
        Feedback
      </h3>
      <div className="settings-section">
        
        <input className="feedback-ques" onChange={(e) => setFeedback({ ...feedback, positive: e.target.value })} type="text" placeholder="positive" /> 
        <input className="feedback-ques" onChange={(e) => setFeedback({ ...feedback, negative: e.target.value })} type="text" placeholder="negative" />
        <button className="submit-feedback" onClick={feedbackSubmit} type="submit" >submit</button>
      </div>

      <hr className="settings-line"></hr>
      <div className="settings-section">
        <button className="downloadbutton logout" onClick={handleLogOut}><i class="fa-solid fa-right-from-bracket" style={{color: "white"}}></i></button>
      </div>

      <div className="settings-footer" style={{background: !comps.mode? "#f5f5f5" : "#1a1a1a"}}>
        <img className="nahneedlogosettings" src={!comps.mode? "/nahneed-dark.png" : "/nahneed.png"}></img>
        <img className="blurtlogosettings" src={!comps.mode? "/blurtlogo-dark.png" : "/blurtlogo.png"}></img>
      </div>
      
    </div>
  );
};

export default Settings;
