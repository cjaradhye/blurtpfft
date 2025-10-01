import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./ToImage.css";

const ExportDivAsPNG = () => {
  const divRef = useRef(null);

  const handleDownload = async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current, { scale: 2 }); // Higher scale for better quality
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "exported-image.png";
      link.click();
    }
  };

  return (
    <div className="image-container">
      <div ref={divRef} className="export-box">
        {/* Your design goes here */}
        <h1>Your Design</h1>
      </div>
      <button onClick={handleDownload} className="download-button">Download as PNG</button>
    </div>
  );
};

export default ExportDivAsPNG;