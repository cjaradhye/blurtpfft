import React from "react";
import Fourth from "./Fourth";
import Bento from "./bento";
import First from "./First";
import Google from "./Google";
import MainComponent from "./Embedded";

const Mobile = () => {
      
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