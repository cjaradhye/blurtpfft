import {useState} from "react";
import "./Dp.css";
import Settings from "./Settings";

function Dp(comps){
    
    const [logoClick, setLogoClick] = useState(false);

    function handleLogoClick(e){
        console.log("clicked");
        setLogoClick((prev)=>{
                return !prev;
            }
        )
    }

    return(
        <div>
            <div 
                className="dp-button" 
                onClick={handleLogoClick}
                style={{
                filter: !logoClick
                    ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))"
                    : "none",
                background: comps.mode? "#F5F5F5" : "#1A1A1A",
                borderColor: comps.mode? "#F5F5F5" : "#1A1A1A"
            }}>
                <svg className="dp-body" xmlns="http://www.w3.org/2000/svg" width="23" height="95" viewBox="0 0 23 95" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0291 17.4336C11.5539 17.4574 12.0465 17.6932 12.3942 18.0869L22.1569 29.1434C22.8627 29.9428 22.7901 31.1623 21.9943 31.8723L13.8844 39.1074C13.5913 39.3688 13.2409 39.5249 12.8794 39.5784V48.8541L20.1209 68.5457C20.1996 68.7599 20.2399 68.9863 20.2399 69.2146V92.4583C20.2399 93.5287 19.3723 94.3963 18.302 94.3963C17.2316 94.3963 16.364 93.5287 16.364 92.4583V69.5596L10.8949 54.6877L5.1315 69.5766V92.4583C5.1315 93.5287 4.26383 94.3963 3.19351 94.3963C2.12319 94.3963 1.25553 93.5287 1.25553 92.4583V69.2146C1.25553 68.9753 1.29984 68.7381 1.38621 68.515L9.00345 48.8371V38.7574C8.39646 38.7856 7.78557 38.5286 7.38359 38.0129L0.409525 29.0659C-0.204788 28.2778 -0.119183 27.1518 0.607213 26.4656L9.61064 17.9608C9.99248 17.6001 10.5044 17.4099 11.0291 17.4336ZM12.8794 34.8097L17.9753 30.2636L12.8794 24.4924V34.8097ZM9.00345 23.8662V33.7864L4.54999 28.073L9.00345 23.8662Z" fill={comps.clr} />
                    <path d="M20.1101 9.55577C20.1101 14.8333 15.8318 19.1115 10.5543 19.1115C5.2768 19.1115 0.998535 14.8333 0.998535 9.55577C0.998535 4.27826 5.2768 0 10.5543 0C15.8318 0 20.1101 4.27826 20.1101 9.55577Z" fill={comps.clr} />
                </svg>
            </div>
            <div className="mainsettings-navbar" style={{display: logoClick? "block" : "none", background: !comps.mode? "#1a1a1a": "#f5f5f5", color: !comps.mode? "#f5f5f5" : "#1a1a1a"}}>
                <Settings clr={comps.clr} mode={comps.mode} />
            </div>
        </div>
    )
}

export default Dp;