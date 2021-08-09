import React from "react";
import Ad from "./Ad";
import ProductList from "./ProductList";

const ProductsArea = () => {
    return (
        <div className="products-area__container">
            <Ad />
            <ProductList />
        </div>
    )
};

export default ProductsArea
