import React, { useState, useEffect } from "react";
import "./Main.css";
import MainPanel from "../mainPanel/mainPanel";
import MainBlock from "../mainBlock/mainBlock";
import MainListProduct from "../mainListProduct/mainListProduct";
function Main() {
  const [products, setPordicts] = useState(null);
  const [slogan, setSlogan] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((response) =>{
        setSlogan(response.slogan)
        setPordicts(response.products)
      }
      );
  }, []);
  return (
    <section className="main">
      <div className="container">
        <div className="main__inner">
          <MainPanel />
          <MainBlock slogan={slogan}/>
          <MainListProduct products={products}/>
        </div>
      </div>
    </section>
  );
}

export default Main;
