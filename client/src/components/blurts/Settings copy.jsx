import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Settings.css"; // Import the CSS file

const Settings = () => {
  const [avatar, setAvatar] = useState(null);
  const [chatSettings, setChatSettings] = useState("default");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleAvatarChange = async (e) => {
    navigate("/blurt/edit-avatar");
  };

  const handleChatSettingsChange = async (option) => {
    try {
      const response = await fetch("/api/update-chat-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatSettings: option }),
      });

      if (response.ok) {
        setChatSettings(option);
      } else {
        console.error("Failed to update chat settings.");
      }
    } catch (error) {
      console.error("Error updating chat settings:", error);
    }
  };

  const toggleDarkMode = async () => {
    try {
      const response = await fetch("/api/toggle-mode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ darkMode: !darkMode }),
      });

      if (response.ok) {
        setDarkMode((prev) => !prev);
      } else {
        console.error("Failed to toggle mode.");
      }
    } catch (error) {
      console.error("Error toggling mode:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", { method: "POST" });

      if (response.ok) {
        window.location.href = "/login";
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="settings-container">
      {/* Sidebar */}
      <div className="sidebar">
        <button className="sidebar-button" onClick={handleAvatarChange}>Change Avatar</button>
        <button className="sidebar-button">Chat Settings</button>
        <button className="sidebar-button">Toggle Mode</button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Change Avatar */}
        <div className="section">
          <h2>Change Avatar</h2>
          {avatar && <img src={avatar} alt="Avatar" className="avatar-preview" />}
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        </div>

        {/* Chat Settings */}
        <div className="section">
          <h2>Chat Settings</h2>
          <select
            value={chatSettings}
            onChange={(e) => handleChatSettingsChange(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="compact">Compact</option>
            <option value="bubble">Bubble</option>
          </select>
        </div>

        {/* Mode Toggle */}
        <div className="section">
          <h2>Mode</h2>
          <button className="mode-button" onClick={toggleDarkMode}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
