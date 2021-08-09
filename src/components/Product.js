import React, { useState } from "react";
import Stars from "./Stars";

const Product = ({ item }) => {
    const { title, price, imgSrc } = item
    const [isLiked, setIsLiked] = useState(false)

    const likeClick = () => {
        setIsLiked(!isLiked)
    }
    return (
        <div className="product__container grow">
            <img alt="img" src={imgSrc} />
            <div className="product-info">
                <div>
                    <Stars />
                    <p>{title}</p>
                    <h5>₪{price} <span>₪{price * 1.5}</span></h5>
                </div>
                <button className="grow">
                    <img alt="img" src={window.location.origin + "/assets/cart-copy-5.svg"} />
                    <span>להוסיף לעגלה</span>
                </button>
            </div>
            <div className="sale">מבצע!</div>
            <svg onClick={() => likeClick()} className={"heart " + (isLiked ? "filled-heart" : "")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" /></svg>
        </div>
    )
};

export default Product;
