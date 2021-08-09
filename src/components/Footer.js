import React from "react";
import Services from "./Services";

const Footer = () => {
    return (
        <div className="footer__container">
            <Services />
            <div className="footer">
                <div>
                    <p>הצטרף לניוזלטר שלנו וקבל הנחה של ₪20 בהזמנה הראשונה שלך</p>
                    <div>
                        <input />
                        <button>הירשם כמנוי</button>
                    </div>
                </div>
                <img alt="img" src={window.location.origin + "/assets/group-9.png"} />
            </div>
        </div>
    )
};

export default Footer;
