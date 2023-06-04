import React, { useState, useEffect } from "react";
import "./basket.css";
import icon from "../../img/exit.svg";
import img from "../../img/img-product.png";
function Basket() {
  const [countProduct, setCountProduct] = useState(null);
  const [allCartPrice, setAllCartPrice] = useState(null);
  const [beforTAXFree, setBeforTAXFree] = useState(null);
  const [products, setPordicts] = useState(null);
  useEffect(() => {
    fetch(`/api/cart`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPordicts(response.products);
        setBeforTAXFree(response.beforTAXFree);
        setAllCartPrice(response.allCartPrice);
        setCountProduct(response.countProduct);
      });
  }, []);
  console.log(products);
  const productAdd = (idProduct) => {
    let rezult = getCookie("cart");
    const obj = JSON.parse(rezult);
    obj[idProduct] = Number(obj[idProduct]) + 1;
    const jsonString = JSON.stringify(obj);
    document.cookie = `cart=${jsonString}; domain:localhost ;path=/`;
    window.location.reload();
    console.log("-----------------------------");
    console.log(rezult + "ответ от куки");
    console.log(obj[9] + "ответ от куки");
    console.log("-----------------------------");
  };
  const productMinus = (idProduct) => {
    let rezult = getCookie("cart");
    const obj = JSON.parse(rezult);
    if (obj[idProduct] > 1) {
      obj[idProduct] = Number(obj[idProduct]) - 1;
      const jsonString = JSON.stringify(obj);
      document.cookie = `cart=${jsonString}; domain:localhost ;path=/`;
      window.location.reload();
    }
  };
  const productDelete = (idProduct) => {
    let rezult = getCookie("cart");
    const obj = JSON.parse(rezult);
    delete obj[idProduct];
    const jsonString = JSON.stringify(obj);
    document.cookie = `cart=${jsonString}; domain:localhost ;path=/`;
    window.location.reload();
  }
  function getCookie(name) {
    var matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  return (
    <div className="basket">
      <div className="container">
        <div className="basket__inner">
          <div className="basket__top">
            <h3 className="basket__title">Кошик</h3>
            <a className="basket__exit" href="../">
              <img className="basket__img-exit" src={icon} alt="" />
            </a>
          </div>
          <div className="basket__block">
            <div className="basket__block-left">
              <div className="basket__top-line">
                <span className="basket__count basket__count-first">
                  Товари у кошику {countProduct ? countProduct : "0"}
                </span>
                <span className="basket__count">Відкладені 0</span>
              </div>
              <div className="basket__body">
                {products
                  ? products.map((item) => {
                      return (
                        <div className="basket__item" key={item.productid}>
                          <button className="basket__cross" onClick={() => productDelete(item.productid)}>
                            <img
                              className="basket__cross-img"
                              src={icon}
                              alt=""
                            />
                          </button>
                          <img className="basket__img" src={img} alt="" />
                          <span className="basket__name">{item.name}</span>
                          <span className="basket__time">
                            <span className="basket__time-title">
                              Орієнтовний час доставки
                            </span>
                            <span className="basket__time-number">
                              {item.maxtime} години
                            </span>
                          </span>
                          <span className="basket__amount">
                            <button
                              className="basket__amount-add amaut-button"
                              onClick={() => productAdd(item.productid)}
                            >
                              +
                            </button>
                            <span className="basket__amount-sum">
                              {item.count}
                            </span>
                            <button
                              className="basket__amount-reduce amaut-button"
                              href="#"
                              onClick={() => productMinus(item.productid)}
                            >
                              -
                            </button>
                          </span>
                          <span className="basket__price">
                            {item.price}
                            <span className="basket__price-valuta">грн</span>
                          </span>
                        </div>
                      );
                    })
                  : <h3 className="basket__no-product">Карзина пустая </h3>}
              </div>
            </div>

            <div className="basket__right-block">
              <div className="basket__line">
                <span className="basket__text-delivary">
                  До безкоштовної доствки
                </span>
                <span className="basket__sum">
                  {beforTAXFree ? beforTAXFree : "0"}
                  <span className="basket__value">грн</span>
                </span>
              </div>
              <div className="basket__line line-mide">
                <span className="basket__text-delivary">Сума заказу</span>
                <span className="basket__sum">
                  {allCartPrice ? allCartPrice : "0"}
                  <span className="basket__value">грн</span>
                </span>
              </div>
              <div className="basket__line">
                <span className="basket__text-delivary">Разом</span>
                <span className="basket__sum ">
                  <span className="basket__final-price">
                    {allCartPrice ? allCartPrice : "0"}
                    <span className="basket__value">грн</span>
                  </span>
                  <div className="basket__dop-info">
                    Без урахування доставки
                  </div>
                </span>
              </div>
              <div className="basket__line">
                <a className="basket__design" href="#">
                  Оформити заказ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
