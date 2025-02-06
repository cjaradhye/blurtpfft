import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Bento from './components/bento';
import "./PseudoScroll.css";
import First from "./components/First";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Mail from "./components/Mail";

const messages = [
  "Hey there!", "Second time!", "Third time!", "Fourth time!", "Fifth time!",
  "Sixth time!", "Seventh time!", "Eighth time!", "Ninth time!", "Tenth time!",
  "Out of thingies, this is a repetitive one"
];

const layers = ["First Layer", "Second Layer", "Third Layer", "Fourth Layer", "Fifth Layer"]; // Add more if needed

const PseudoScroll = () => {
  const [currentLayer, setCurrentLayer] = useState(0);
  const [maskCount, setMaskCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (scrolling) return; // Prevent rapid scrolling

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextLayer = currentLayer + direction;

      if (nextLayer >= 0 && nextLayer < layers.length) {
        setScrolling(true);
        setMaskCount((prev) => Math.min(prev + 1, messages.length - 1));
        setCurrentMessage(messages[maskCount]);

        gsap.to(".mask", {
          height: "100%",
          duration: 1,
          ease: "power2.inOut",
          onStart: () => gsap.to(".mask-text", { opacity: 1, duration: 0.3 }),
          onComplete: () => {
            setCurrentLayer(nextLayer);
            gsap.to(".layers-container", {
              y: `-${nextLayer * 100}vh`,
              duration: 0,
            });
            gsap.to(".mask", {
              height: "0%",
              duration: 1,
              onComplete: () => {
                gsap.to(".mask-text", { opacity: 0, duration: 0.3 });
                setScrolling(false);
              },
            });
          },
        });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentLayer, scrolling]);

  return (
    <div className="container-wrapper">
      {/* All Layers (Properly Positioned) */}
      <div className="layers-container">
        <First />
        <Bento />
        <Third />
        <Mail />
        <Fourth />
      </div>

      {/* Mask for Transition */}
      <div className="mask">
        <span className="mask-text">{currentMessage}</span>
      </div>
    </div>
  );
};

export default PseudoScroll;
