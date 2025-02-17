import { useState } from "react";
import "./Extra.css";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    const response = await fetch("https://blurtpfft.vercel.app/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setMessage(data.message || "Error unsubscribing");
  };

  return (
    <div className="feedbackpage unsubscribepage">
      <h2 className="mailone">unsubscribe?</h2>
      <form onSubmit={handleUnsubscribe}>
        <input
            className="mailtwo"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="mailbutton" type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Unsubscribe;