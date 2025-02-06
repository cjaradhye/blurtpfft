import { useState } from "react";
import { motion } from "framer-motion";
import "./Mail.css";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [reaction, setReaction] = useState(null);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async () => {
    const valid = isValidEmail(email);

    if (checked && valid) {
      setReaction({ img: "ruhi.png", text: "Awww... I see a bond forming" });
    } else if (checked && !valid) {
      setReaction({ img: "bhumika.png", text: "Do you feel funny after doing that? Exactly why she left." });
    } else if (!checked && valid) {
      setReaction({ img: "kunal.png", text: "I am so confused, could've sworn and made me feel happy, yk?" });
    } else {
      setReaction({ img: "harshit.png", text: "I respect the honesty." });
    }


    if (valid) {
      try {
        console.log("pleasepleaseplease");
        await fetch("http://localhost:3000/email", {
          
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        });
      } catch (error) {
        console.error("Error saving email:", error);
      }
    }
  };

  return (
    <div className="mailpage">
      <h1 className="mailone">curious? <br></br>well blurt is a button away</h1>
      <input
        type="text"
        placeholder="enter your email"
        className="mailtwo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="mailthree">
        <input className="mailcheck" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <p>I solemnly swear that I am typing an email address</p>
      </label>
      <p className="mailfour">(please I didn't have the time to add the email checker)</p>
      <button
        onClick={handleSubmit}
        className="mailbutton"
      >
        Submit
      </button>

      {reaction && (
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: -100, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mailreaction"
        >
          <img src={reaction.img} alt="Reaction" className="mailpic" />
          <p className="text-lg font-medium">{reaction.text}</p>
        </motion.div>
      )}
    </div>
  );
}
