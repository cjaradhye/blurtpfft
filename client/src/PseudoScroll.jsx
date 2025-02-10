import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Bento from './components/bento';
import "./PseudoScroll.css";
import First from "./components/First";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Mail from "./components/Mail";

const layers = ["First Layer", "Second Layer", "Third Layer", "Fourth Layer", "Fifth Layer"];

const PseudoScroll = () => {
  const [currentLayer, setCurrentLayer] = useState(0);
  const [maskCount, setMaskCount] = useState(1);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (scrolling) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextLayer = currentLayer + direction;
      
      if (nextLayer >= 0 && nextLayer < layers.length) {
        setScrolling(true);
        setMaskCount((prev) => {
          const newCount = prev < 24 ? prev + 1 : 24;
          return newCount;
        });

        gsap.to(".mask", {
          height: "100%",
          duration: 1,
          ease: "power2.inOut",
          onStart: () => gsap.to(".mask", { opacity: 1, duration: 0.3 }),
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
                gsap.to(".mask", { opacity: 0, duration: 0.3 });
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
      <div className="mask" style={{
        backgroundImage: `url(./loading/loading${maskCount}.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      </div>
    </div>
  );
};

export default PseudoScroll;
