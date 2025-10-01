import React, { useState, useRef } from 'react';
import Style from './Style'; // Import the Style component
import html2canvas from 'html2canvas';

const DownloadButton = (comps) => {
    const styleRef = useRef(null); // Create a reference to the Style component

    const handleDownload = () => {
        if (!styleRef.current) return;

        html2canvas(styleRef.current, { backgroundColor: null }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'card.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    return (
        <div>
            {/* Off-screen rendering instead of display: none */}
            <div style={{ position: "absolute", left: "-9999px" }} ref={styleRef}>
                <Style title={comps.title} subtitle={comps.subtitle} color={comps.color} mode={comps.mode} />
            </div>

            <button 
                className='downloadbutton' 
                onClick={handleDownload} 
                style={{ backgroundColor: comps.mode ? "#1a1a1a" : "#f5f5f5", border: "none" }}>
                <i className="fa-solid fa-download" style={{ color: !comps.mode ? "#1a1a1a" : "#f5f5f5" }}></i>
            </button>
        </div>
    );
};

export default DownloadButton;
