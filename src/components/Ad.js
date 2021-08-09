import React from "react";
import { ShowWindowDimensions } from "../screenWidth";


const Ad = () => {



    return (
        <div className="ad__container grow">
            <div className="ad-text">
                <div style={{ textAlign: "center" }}>
                    <h2>מברשת שיניים</h2>
                    <h2>חשמלית פיליפס</h2>
                </div>
                <h6>קנה עכשיו</h6>
            </div>
            {ShowWindowDimensions() > 1175 ?
                <img alt="img" src={window.location.origin + "/assets/ad-desktop.png"} /> :
                <img alt="img" src={window.location.origin + "/assets/ad-mobile.png"} />}
        </div>
    )
};

export default Ad;
