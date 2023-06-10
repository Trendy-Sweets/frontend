import React, { useState, useEffect } from "react";
import iconClos from "../../img/exit-new.svg";
import "./myOrder.css";
function MyOrder() {
  const [products, setPordicts] = useState(null);
  const [error, setEror] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let product;
  useEffect(() => {
    fetch("/api/order/list")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPordicts(response.order_list);
        setEror(response.error);
        setErrorMsg(response.errorMSG);
      });
  }, []);

  if (Array.isArray(products)) {
    product = products.map((item) => {
      return (
        <div className="myOrder__item">
          <span className="myOrder__number-item">№{item.orderid}</span>
          <span className="myOrder__citi-item">м. {item.city}</span>
          <span className="myOrder__data-item">
            <div className="myOrder__data-title">Дата доставки:</div>
            <span>
              <span>{item.date_delivery}</span>
            </span>
          </span>
          {/* <span className="myOrder__count-item">4 товара</span> */}

          <span className="myOrder__price-item">
            {item.allprice}
            <span>грн</span>
          </span>
          <span className="myOrder__status-item">Оплатити замвленняо</span>
        </div>
      );
    });
  }

  return (
    <section className="myOrder">
      <div className="container">
        <div className="myOrder__inner">
          <div className="myOrder__header">
            <h3 className="myOrder__title">Мої замовлення</h3>
            <a className="myOrder__exit" href="../">
              <img className="myOrder__img-exit" src={iconClos} alt="" />
            </a>
          </div>

          <div className="myOrder__body">
            {error ? (
              <h3 className="myOrder__title-no">{errorMsg}</h3>
            ) : (
              product
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyOrder;
