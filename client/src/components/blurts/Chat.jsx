import React, { useState, useEffect, useRef } from "react";
import "./styles/Chat.css";
import messages from './jsons/sample_chat.json';


const userState = {
  user_id : "67b73da2bc45eca3079056be",
  blurt_id: "thefirst"
}
const getColorForSender = (sender) => {
  const colors = {
    Kunal: "#FF5E5B",
    Ruhi: "#FFC83D",
    Harshit: "#427DFF",
    Bhumika: "#DA3FCC",
    Mediator: "#bdbdbd"
  };
  return colors[sender] || "#ffffff";
};

const formatMessage = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.*?)\*/g, "<i>$1</i>");
};

const Chat = () => {
  const { user_id, blurt_id } = userState; 
  const [tapTalk, setTapTalk] = useState(true);
  const [autoTalk, setAutoTalk] = useState(true);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null);
  const chatContainerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/blurt-interactions/stats/${blurt_id}`)
      .then(res => res.json())
      .then(data => {
        setLikes(data.likes);
        setDislikes(data.dislikes);
        setUserReaction(data.userReaction);
      })
      .catch(err => console.error("Error fetching interactions:", err));
  }, [blurt_id]);

  const handleLike = async (reaction) => {
    if (userReaction === reaction) reaction = null; 
    try {
      const res = await fetch(`http://localhost:3000/blurt-interactions/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, blurt_id })
      });
      if (!res.ok) throw new Error("Failed to update reaction");
      const data = await res.json();
      setLikes(data.likes);
      setDislikes(data.dislikes);
      setUserReaction(reaction);
    } catch (err) {
      console.error("Error updating reaction:", err);
    }
  };

  const handleDislike = async (reaction) => {
    if (userReaction === reaction) reaction = null; 
    try {
      const res = await fetch(`http://localhost:3000/blurt-interactions/dislike`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, blurt_id })
      });
      if (!res.ok) throw new Error("Failed to update reaction");
      const data = await res.json();
      setLikes(data.likes);
      setDislikes(data.dislikes);
      setUserReaction(reaction);
    } catch (err) {
      console.error("Error updating reaction:", err);
    }
  };


  const checkAutoScroll = () => {
    if (!chatContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    setAutoScroll(scrollTop + clientHeight >= scrollHeight - 50);
  };

  useEffect(() => {
    if (autoTalk) {
      const interval = setInterval(() => {
        showNextMessage();
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [autoTalk, intervalTime, currentIndex]);

  const showNextMessage = () => {
    if (currentIndex < messages.length) {
      setVisibleMessages(prev => [...prev, messages[currentIndex]]);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleTap = () => {
    if (tapTalk) showNextMessage();
  };

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container && autoScroll) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  }, [visibleMessages, autoScroll]);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      checkAutoScroll();
      setIsScrolledUp(container.scrollTop + container.clientHeight < container.scrollHeight);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="chat-wrapper" onClick={handleTap}>
      <button className="settings-button" onClick={() => setShowSettings(!showSettings)}>⚙️</button>
      <div className={`settings-navbar ${showSettings ? 'visible' : ''}`}>
        <label>
          <input type="checkbox" checked={tapTalk} onChange={() => setTapTalk(prev => !prev)} /> TapTalk
        </label>
        <label>
          <input type="checkbox" checked={autoTalk} onChange={() => setAutoTalk(prev => !prev)} /> AutomaticTalk
        </label>
        {autoTalk && (
          <input type="range" min="500" max="5000" step="500" value={intervalTime} onChange={e => setIntervalTime(Number(e.target.value))} />
        )}
      </div>

      <div id="chat-container" className="chat-container" ref={chatContainerRef}>
        {visibleMessages.map((msg, index) => {
          const isLeft = msg.sender === "Kunal" || msg.sender === "Ruhi";
          const isMediator = msg.sender === "Mediator";
          const showHeader = index === 0 || visibleMessages[index - 1].sender !== msg.sender;
          const originalMsg = messages.find(m => m.id === msg.replying_to);
          const originalSender = originalMsg ? originalMsg.sender : null;
          const truncatedMessage = originalMsg?.message.length > 50 
            ? originalMsg.message.substring(0, 47) + "..." 
            : originalMsg?.message;

          return (
            <div key={msg.id} className={`message-group ${isMediator ? "mediator" : isLeft ? "left" : "right"}`}>
              {showHeader && !isMediator && (
                <div className="message-header">
                  <img src={`/${msg.sender.toLowerCase()}.png`} alt="dp" className="dp" />
                  <span className={`sender-name ${msg.sender.toLowerCase()}chat`}>{msg.sender}</span>
                </div>
              )}
              <div className="message-box">
                {originalMsg && (
                  <div className="reply-box">
                    <div className="reply-indicator" style={{ backgroundColor: getColorForSender(originalSender) }}></div>
                    <div className="reply-content">
                      <span className="reply-sender" style={{ color: getColorForSender(originalSender) }}>{originalSender}</span> {truncatedMessage}
                    </div>
                  </div>
                )}
                <span dangerouslySetInnerHTML={{ __html: formatMessage(msg.message) }}></span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="reaction-buttons">
        <button className={`like-btn ${userReaction === "like" ? "active" : ""}`} onClick={() => handleLike("like")}>
          👍 {likes}
        </button>
        <button className={`dislike-btn ${userReaction === "dislike" ? "active" : ""}`} onClick={() => handleDislike("dislike")}>
          👎 {dislikes}
        </button>
      </div>

      {isScrolledUp && (
        <button className="scroll-to-bottom" onClick={() => {
          const chatContainer = document.getElementById("chat-container");
          chatContainer.scrollTop = chatContainer.scrollHeight;
          setIsScrolledUp(false);
        }}>⬇ Scroll to latest</button>
      )}
    </div>
  );
};

export default Chat;
