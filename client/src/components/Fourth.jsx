import React from "react";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import "./Fourth.css";

function Fourth() {
    return (
        <div className="fourthpage">
            <div className="fourthone">
                <img src="./nahneed.png" alt="nahneedlogo" className="nahneedlogo"></img>
                <div className="fourthrowflex">
                    <a href="https://github.com/cjaradhye"> <i className="fab fa-github-square fourthicon" style={{ color: "#fafafa" }}></i> </a>
                    <a href="mailto:nahneedpfft@gmail.com"> <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#fafafa"}}></i> </a>
                    <a href="https://www.linkedin.com/in/aradhyeswarup/"> <i class="fa-brands fa-linkedin fourthicon" style={{ color: "#fafafa"}}></i> </a>
                    <a href="https://www.instagram.com/nahneedpfft/"> <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#fafafa"}}></i> </a>
                </div>
            </div>
            <div className="fourthtwo">
                <img src="./blurtlogo.png" className="blurtlogo" ></img>
                <div className="bottom">
                    <div className="fourthbox bhumika">
                        <a href="https://www.instagram.com/bhumikathemalik/"> <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#DA3FCC", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}></i> </a>
                        <a href="mailto:bhumikathemalik@gmail.com"> <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#DA3FCC", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}></i> </a>
                    </div>
                    <div className="fourthbox ruhi">
                        <a href="https://www.instagram.com/ruhithenair/"> <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#FFC83D", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}></i> </a>
                        <a href="mailto:ruhithenair@gmail.com"> <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#FFC83D", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i> </a>
                    </div>
                    <div className="fourthbox kunal">
                        <a href="https://www.instagram.com/kunalthemehra/"> <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#FF5E5B", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i> </a>
                        <a href="mailto:kunalthemehra@gmail.com"> <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#FF5E5B", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i> </a>
                    </div>
                    <div className="fourthbox harshit"> 
                        <a href="https://www.instagram.com/harshittheiyer/"> <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#427DFF", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i> </a>
                        <a href="mailto:harshittheiyer@gmail.com"> <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#427DFF", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i> </a>      
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Fourth;
