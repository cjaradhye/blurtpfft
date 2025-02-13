import React from "react";

function First() {
    return (
        <div className="firstpage">
            <video  autoPlay muted loop playsInLine className="videofirst">
                <source src="./video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default First;