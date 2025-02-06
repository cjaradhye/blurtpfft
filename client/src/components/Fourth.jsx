import React from "react";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import "./Fourth.css";

function Fourth() {
    return (
        <div className="fourthpage">
            <div className="fourthone">
                <img src="./nahneed.png" alt="nahneedlogo" className="nahneedlogo"></img>
                <div className="fourthrowflex">
                    <i className="fab fa-github-square fourthicon" style={{ color: "#fafafa" }}></i>
                    <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#fafafa"}}></i>
                    <i class="fa-brands fa-linkedin fourthicon" style={{ color: "#fafafa"}}></i>
                    <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#fafafa"}}></i>
                </div>
            </div>
            <div className="fourthtwo">
                <img src="./blurtlogo.png" className="blurtlogo" ></img>
                <div className="bottom">
                    <div className="fourthbox bhumika">
                        <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#DA3FCC", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}></i>
                        <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#DA3FCC", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}></i>
                    </div>
                    <div className="fourthbox ruhi">
                        <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#FFC83D", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}></i>
                        <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#FFC83D", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i>
                    </div>
                    <div className="fourthbox kunal">
                        <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#FF5E5B", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i>
                        <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#FF5E5B", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i>
                    </div>
                    <div className="fourthbox harshit"> 
                        <i class="fa-brands fa-square-instagram fourthicon" style={{ color: "#427DFF", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i>
                        <i class="fa-solid fa-square-envelope fourthicon" style={{ color: "#427DFF", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"  }}></i>      
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Fourth;
