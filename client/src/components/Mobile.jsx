import React from "react";
import Fourth from "./Fourth";
import Bento from "./bento";
import First from "./First";
import Google from "./Google";
import MainComponent from "./Embedded";

const Mobile = () => {
    const isEmbeddedBrowser = () => {
        const userAgent = navigator.userAgent || "";
        return /FBAN|FBAV|Instagram|Twitter|Snapchat|LinkedIn|WhatsApp/i.test(userAgent);
      };
      
    const copyToClipboard = () => {
        navigator.clipboard.writeText(url).then(() => {
        alert("Link copied! Open in your browser.");
        });
    };
      
    return (
        <div>
            <MainComponent />
            <First />
            <Bento />
            <Google />
            <Fourth />

        </div>
    );
}

export default Mobile;