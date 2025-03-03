import React from "react";
import Fourth from "./Fourth";
import Bento from "./bento";
import First from "./First";
import Google from "./Google";
import MainComponent from "./Embedded";

const Mobile = () => {
    return (
        <div>
            <First />
            <Bento />
            <Google />
            <Fourth />
            <MainComponent />
        </div>
    );
}

export default Mobile;