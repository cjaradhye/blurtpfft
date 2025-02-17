import { useState } from "react";
import "./Extra.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState({ positive: "", negative: "" });
  const [message, setMessage] = useState("");

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://blurtpfft.vercel.app/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });
    const data = await response.json();
    setMessage(data.message || "Error submitting feedback");
  };

  return (
    <div className="feedbackpage">
      <h2 className="mailone">feedback</h2>
      <form className="hmm" onSubmit={handleFeedbackSubmit}>
        <input
            className="mailtwo"
          type="text"
          placeholder="positives?"
          value={feedback.positive}
          onChange={(e) => setFeedback({ ...feedback, positive: e.target.value })}
        />
        <input
            className="mailtwo"
          type="text"
          placeholder="negatives?"
          value={feedback.negative}
          onChange={(e) => setFeedback({ ...feedback, negative: e.target.value })}
        />
        <button className="mailbutton" type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};


export default Feedback;