import React from "react";
import Product from "./Product";

const items = [
    { title: "מכונת תספורת", price: 234, imgSrc: window.location.origin + "/assets/trim.png" },
    { title: "מד-חום מתקדם", price: 68, imgSrc: window.location.origin + "/assets/thermometer.png" },
    { title: "מברשת שיניים חשמלית", price: 82, imgSrc: window.location.origin + "/assets/etb.png" },
    { title: "מסיכות N95", price: 46, imgSrc: window.location.origin + "/assets/n95.png" },
    { title: "מייבש שיער טורבו", price: 176, imgSrc: window.location.origin + "/assets/hair-dryer.png" },
    { title: "משקל אלקטרוני", price: 100, imgSrc: window.location.origin + "/assets/scale.png" },
]

const ProductList = () => {
    return (
        <div className="products-list__container">
            <div className="dou-items__container">
                <Product item={items[0]} />
                <Product item={items[1]} />
            </div>
            <div className="dou-items__container">
                <Product item={items[2]} />
                <Product item={items[3]} />
            </div>
            <div className="dou-items__container">
                <Product item={items[4]} />
                <Product item={items[5]} />
            </div>
        </div>
    )
};

export default ProductList;
