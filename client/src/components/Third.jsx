import React from "react";
import "./styles/Third.css";

function Third() {
    return (
        <div className="thirdpage">
            {/* <div className="colflex">
                <div className="rowflex">
                    <div className="testone bhumika"></div>
                    <div className="testone ruhi"></div>
                </div>
                <input type="text" className="testtwo" placeholder="type your question here"></input>
                <div className="rowflex">
                    <div className="testone kunal"></div>
                    <div className="testone harshit"></div>
                </div>
            </div> */}

            <div className="colflex mainthingy">
                <div className="colflex testbox">
                    <div className="rowflex textbox">
                        <img src="./bhumika.png" alt="bhumika" className="testpic"></img>
                        <div className="testtext"></div>
                    </div>
                    <div className="rowflex textbox">
                        
                        <div className="testtext"></div>
                        <img src="./kunal.png" alt="kunal" className="testpic"></img>
                    </div>
                    <div className="rowflex textbox">
                        <img src="./harshit.png" alt="harshit" className="testpic"></img>
                        <div className="testtext"></div>
                    </div>
                    <div className="rowflex textbox">
                        
                        <div className="testtext"></div>
                        <img src="./ruhi.png" alt="ruhi" className="testpic"></img>
                    </div>
                </div>

                <input className="testquestion" type="text" placeholder="type your question here"></input>
                <button type="submit" className="testsubmit">submit</button>
            </div>
        </div>
    )
}

export default Third;