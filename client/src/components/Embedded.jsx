import { useState, useEffect } from "react";

const isEmbeddedBrowser = () => {
  const userAgent = navigator.userAgent || "";
  return /FBAN|FBAV|Instagram|Twitter|Snapchat|LinkedIn|WhatsApp/i.test(userAgent);
};

const Embedded = ({ url }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("url").then(() => {
      alert("Link copied! Open in your browser.");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <p className="text-lg font-medium">You're using an in-app browser.</p>
      <p className="text-sm text-gray-600">For the best experience, open this link in your default browser.</p>
      <button
        onClick={copyToClipboard}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Copy Link & Open in Browser
      </button>
    </div>
  );
};

const MainComponent = () => {
  const [isEmbedded, setIsEmbedded] = useState(false);
  const url = window.location.href;

  useEffect(() => {
    setIsEmbedded(isEmbeddedBrowser());
  }, []);

  if (isEmbedded) {
    return <Embedded url={url} />;
  }

  return <div></div>;
};

export default MainComponent;
