import React from "react";
import Footer from "./components/Footer";
import ProductsArea from "./components/ProductsArea";
import Title from "./components/Title";
import './styles/style.scss'

const App = () => {
  return (
    <div>
      <div className="content__container">
        <div className="app__container">
          <Title />
          <ProductsArea />
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default App;
