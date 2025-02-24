import React, { useState } from 'react';
import Style from './Style'; // Import the Style component
import html2canvas from 'html2canvas';

const DownloadButton = (comps) => {
    const [attributes, setAttributes] = useState({
        title: comps.title,
        subtitle: comps.subtitle,
        color: comps.color
    });

    const handleDownload = () => {
        // Use html2canvas to convert the Style component to an image
        html2canvas(document.querySelector(".style-pic")).then(canvas => {
            const link = document.createElement('a');
            link.download = 'card.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    return (
        <div>
            <div style={{display:"none"}}>
                <Style {...attributes} />
            </div>
            <button className='downloadbutton' onClick={handleDownload} style={{backgroundColor: comps.mode? "#1a1a1a" : "#f5f5f5", border: "none"}}>
                <i class="fa-solid fa-download" style={{color: !comps.mode? "#1a1a1a" : "#f5f5f5"}}></i>
            </button>
        </div>
    );
};

export default DownloadButton;