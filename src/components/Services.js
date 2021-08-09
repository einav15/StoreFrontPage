import React from "react";

const Services = () => {
    return (
        <div className="services">
            <div className="text-n-title">
                <h2>למה כמיפל?</h2>
                <div className="seperator" />
                <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש שמחויט.</p>
            </div>
            <div className="services__content">
                <div className="service grow">
                    <img alt="img" src={window.location.origin + "/assets/box.svg"} />
                    <h2>משלוח מהיר</h2>
                </div>
                <div className="service grow">
                    <img style={{ width: "7rem" }} alt="img" src={window.location.origin + "/assets/man.svg"} />
                    <h2>שירות</h2>
                    <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש שמחויט.</p>

                </div>
                <div className="service grow">
                    <img alt="img" src={window.location.origin + "/assets/shield.svg"} />
                    <h2>מהימן</h2>
                </div>
            </div>

        </div>
    )
};

export default Services;
