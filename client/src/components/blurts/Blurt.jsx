import { useNavigate } from "react-router-dom";

function Blurt(comps){
    function formatDate(dateString) {
        const date = new Date(dateString);
    
        // Get day, month, and year
        const day = date.getUTCDate();
        const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
        const year = date.getUTCFullYear();
    
        // Add ordinal suffix (st, nd, rd, th)
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

    console.log(); // Output: "17th February 2025"
    

    const navigate = useNavigate();

    function handleClick(e){
        const stuff = {
            user_id: comps.user_id,
            blurt_id: comps.link
        }
        console.log(stuff);
        navigate(`/blurt/${comps.link}`,{ state: stuff});
    }
    return(
        <div className="blurt-item" onClick={handleClick}   style={{ backgroundImage: `url(${comps.mode ? "/bg.png" : "/bg-dark.png"})` }}>
            <div className="blurt-heading" style={{ color: comps.mode ? "#f5f5f5" : "#1a1a1a" }}>{comps.heading}</div>
            <div className="blurt-date" style={{ color: comps.mode ? "#f5f5f5" : "#1a1a1a" }}>{formatDate(comps.date)}</div>
        </div>
    )
}

export default Blurt;