import React from "react";

function First() {
    return (
        <div className="firstpage">
            <video autoPlay loop muted className="videofirst">
                <source src="./video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default First;