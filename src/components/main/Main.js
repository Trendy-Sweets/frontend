import React, { useState, useEffect } from "react";
import "./Main.css";
import MainPanel from "../mainPanel/mainPanel";
import MainBlock from "../mainBlock/mainBlock";
import MainListProduct from "../mainListProduct/mainListProduct";
function Main() {
  const [products, setPordicts] = useState(null);
  const [slogan, setSlogan] = useState(null);
  const [basketPrice, setBasketPrice] = useState(null);
  const [logaut, setLogaut] = useState(null);
  const [cart, setCart] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((response) => {
        setSlogan(response.slogan);
        setPordicts(response.products);
        setBasketPrice(response.cart.allCartPrice);
        setLogaut(response.сlient);
        setCart(response.cart.allProductCount);
      });
  }, []);
  return (
    <section className="main">
      <div className="container">
        <div className="main__inner">
          <MainPanel basketPrice={basketPrice} logaut={logaut} cart={cart} />
          <MainBlock slogan={slogan} />
          <MainListProduct products={products} />
        </div>
      </div>
    </section>
  );
}

export default Main;
