import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Blurt(comps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
        const year = date.getUTCFullYear();
    
        const ordinalSuffix = (d) => {
            if (d > 3 && d < 21) return "th";
            switch (d % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        };
    
        return `${day}${ordinalSuffix(day)} ${month} ${year}`;
    }

    function handleNavigate(e) {
        e.stopPropagation(); // Prevents triggering parent click events
        navigate(`/blurt/${comps.link}`, { state: { user_id: comps.user_id, blurt_id: comps.link } });
    }

    function toggleHover() {
        if (isMobile) {
            setIsHovered(!isHovered);
        }
    }

    return (
        <div 
            className="blurt-item" 
            onClick={!isMobile ? handleNavigate : null} 
            style={{ backgroundImage: `url(${comps.mode ? "/bg.png" : "/bg-dark.png"})` }}
        >
            <div 
                className="icon-container"
                onMouseEnter={isMobile ? null : () => setIsHovered(true)}
                onMouseLeave={isMobile ? null : () => setIsHovered(false)}
                onClick={isMobile ? toggleHover : null}
            >
                <i 
                    className={`fa-solid ${isHovered ? "fa-envelope-open" : "fa-envelope"}`} 
                    style={{ color: comps.mode ? "#f5f5f5" : "#1a1a1a" }}
                ></i>
            </div>

            {isHovered && (
                <div className="blurt-intro" style={{ color: comps.mode ? "#f5f5f5" : "#1a1a1a" }}>
                    {comps.intro}
                </div>
            )}
            
            {!isHovered && (
                <div 
                    className="blurt-heading" 
                    style={{ color: comps.mode ? "#f5f5f5" : "#1a1a1a", cursor: isMobile ? "pointer" : "default" }} 
                    onClick={isMobile ? handleNavigate : null}
                >
                    {comps.heading}
                </div>
            )}
            {!isHovered && (
                <div 
                    className="blurt-date" 
                    style={{ color: comps.mode ? "#f5f5f5" : "#1a1a1a", cursor: isMobile ? "pointer" : "default" }} 
                    onClick={isMobile ? handleNavigate : null}
                >
                    {formatDate(comps.date)}
                </div>
            )}
        </div>
    );
}

export default Blurt;
