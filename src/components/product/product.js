import { useParams, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./product.css";
import logo from "../../img/img-product.jpg";
import iconExit from "../../img/exit.svg";
function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const [products, setPordicts] = useState(null);
  const [allProductCount, setAllProductCount] = useState(null);
  useEffect(() => {
    fetch(`/api/sweet/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response.prtoductInfo);
        setPordicts(response.products);
        setAllProductCount(response.cart.allProductCount);
      });
  }, []);

  const productAdd = (idProduct) => {
    console.log(idProduct);
    let rezult = getCookie("cart");
    if (rezult) {
      const obj = JSON.parse(rezult);
      if (obj[idProduct]) {
        obj[idProduct] = Number(obj[idProduct]) + 1;
      } else {
        obj[idProduct] = 1;
      }
      const jsonString = JSON.stringify(obj);
      document.cookie = `cart=${jsonString}; domain:localhost ;path=/`;
    } else {
      document.cookie = `cart={"${idProduct}":"1"}; domain:localhost ;path=/`;
      console.log(document.cookie);
    }
    window.location.reload();
  };
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
    <section className="product">
      <div className="container">
        <div className="product__inner">
          <div className="product__block-left">
            <img
              className="product__img-left"
              src={product ? product.product_foto : logo}
              alt=""
            />
          </div>
          <div className="product__block-right">
            <a className="product__exit-right" href="../../">
              <img className="product__exit-icon-right" src={iconExit} alt="" />
            </a>
            <h2 className="product__title-right">
              {product ? product.product_name : "noname"}
            </h2>
            <div className="product__price-right">
              {product ? product.product_price : "0"}{" "}
              <span className="product__price-valuta-right">грн</span>
            </div>
            <div className="product__time-right">
              <span className="product__time-number">
                {product ? product.maxtime : "0"} години
              </span>
            </div>
            <div className="product__colors-right">
              <p className="product__title-color-right">Колір:</p>
              <div className="product__list-colors-right">
                {/* {productColor? productColor :"LLL"} */}
                {products
                  ? products.map((item) => {
                      let a = `${window.location.origin}/product/${item.productid}`;
                      return (
                        <a
                          className="product__item-colors-right"
                          href={a}
                          style={{ backgroundColor: item.product_color }}
                        ></a>
                      );
                    })
                  : "loding..."}
              </div>
            </div>
            <div className="product__carzina-right">
              <button
                className="product__add-carzina-right"
                onClick={() => productAdd(id)}
              >
                Додати у кошик
              </button>
            </div>
            <h4 className="product__subtitle-right">Доп.інформація</h4>
            <p className="product__dot-info-right">
              {product ? product.product_composition : "no dop-info"}
            </p>
          </div>
          {allProductCount ? (
            <a className="basket-button" href="../basket">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2285 6.55209C15.4679 5.87578 15.911 5.29028 16.4968 4.87617C17.0827 4.46207 17.7825 4.23971 18.4999 4.23971C19.2173 4.23971 19.9171 4.46207 20.503 4.87617C21.0888 5.29028 21.532 5.87578 21.7713 6.55209C21.8219 6.69533 21.9003 6.8272 22.0019 6.94016C22.1034 7.05312 22.2263 7.14498 22.3633 7.21047C22.5004 7.27596 22.649 7.31382 22.8007 7.32187C22.9524 7.32993 23.1042 7.30802 23.2475 7.25741C23.3907 7.20679 23.5226 7.12846 23.6355 7.02689C23.7485 6.92531 23.8404 6.80248 23.9059 6.66541C23.9714 6.52834 24.0092 6.3797 24.0173 6.228C24.0253 6.0763 24.0034 5.9245 23.9528 5.78126C23.5542 4.65378 22.8158 3.6776 21.8394 2.98716C20.863 2.29671 19.6966 1.92596 18.5007 1.92596C17.3048 1.92596 16.1384 2.29671 15.1619 2.98716C14.1855 3.6776 13.4472 4.65378 13.0486 5.78126C12.9951 5.92506 12.9707 6.07807 12.9769 6.23138C12.9831 6.38469 13.0198 6.53523 13.0848 6.67423C13.1498 6.81322 13.2418 6.93789 13.3554 7.04098C13.4691 7.14406 13.6021 7.22349 13.7468 7.27464C13.8914 7.32579 14.0448 7.34764 14.198 7.33892C14.3512 7.33019 14.5011 7.29106 14.639 7.22381C14.7769 7.15656 14.9001 7.06253 15.0013 6.94721C15.1025 6.83188 15.1797 6.69757 15.2285 6.55209ZM4.2395 9.25001C4.2395 8.94335 4.36132 8.64926 4.57816 8.43242C4.795 8.21558 5.0891 8.09376 5.39575 8.09376H31.6041C31.9107 8.09376 32.2048 8.21558 32.4217 8.43242C32.6385 8.64926 32.7603 8.94335 32.7603 9.25001C32.7603 9.55667 32.6385 9.85076 32.4217 10.0676C32.2048 10.2844 31.9107 10.4063 31.6041 10.4063H5.39575C5.0891 10.4063 4.795 10.2844 4.57816 10.0676C4.36132 9.85076 4.2395 9.55667 4.2395 9.25001ZM7.88863 11.951C8.19443 11.9307 8.49579 12.0326 8.72648 12.2344C8.95716 12.4362 9.0983 12.7213 9.11888 13.0271L9.82804 23.6646C9.96679 25.7412 10.0655 27.1873 10.2813 28.2742C10.4925 29.3302 10.7854 29.8883 11.2063 30.283C11.6287 30.6776 12.2053 30.9336 13.2721 31.0723C14.3729 31.2157 15.822 31.2188 17.9033 31.2188H19.0965C21.1778 31.2188 22.627 31.2157 23.7277 31.0723C24.7945 30.9336 25.3711 30.6776 25.7935 30.283C26.2144 29.8883 26.5073 29.3302 26.7185 28.2742C26.9344 27.1873 27.033 25.7412 27.1718 23.6646L27.881 13.0271C27.8911 12.8756 27.931 12.7275 27.9983 12.5914C28.0656 12.4552 28.1591 12.3337 28.2734 12.2337C28.3878 12.1337 28.5206 12.0572 28.6645 12.0086C28.8084 11.9599 28.9604 11.9401 29.112 11.9502C29.2635 11.9604 29.4116 12.0002 29.5477 12.0676C29.6838 12.1349 29.8054 12.2284 29.9054 12.3427C30.0054 12.457 30.0819 12.5899 30.1305 12.7338C30.1791 12.8777 30.199 13.0297 30.1888 13.1813L29.4735 23.8989C29.3425 25.8753 29.2361 27.4725 28.9863 28.7274C28.7258 30.0301 28.2849 31.1186 27.3722 31.9711C26.4611 32.8252 25.3449 33.1936 24.0268 33.3648C22.7595 33.5313 21.1593 33.5313 19.1767 33.5313H17.8231C15.8405 33.5313 14.2403 33.5313 12.973 33.3648C11.6549 33.1936 10.5388 32.8252 9.62763 31.9711C8.71496 31.1186 8.27404 30.0286 8.0135 28.7274C7.76375 27.4725 7.65892 25.8753 7.52634 23.8989L6.811 13.1813C6.80095 13.0297 6.82086 12.8777 6.86958 12.7338C6.9183 12.59 6.99488 12.4571 7.09496 12.3429C7.19503 12.2286 7.31663 12.1352 7.45281 12.068C7.58899 12.0008 7.73708 11.961 7.88863 11.951Z"
                  fill="#321A06"
                />
              </svg>
              <span className="main__basket-counter">{allProductCount}</span>
            </a>
          ) : (
            " "
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;
