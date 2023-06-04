import { useParams,useLocation  } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./product.css";
import logo from "../../img/img-product.jpg";
import iconExit from '../../img/exit.svg'
function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const [products, setPordicts] = useState(null);
  useEffect(() => {
    fetch(`/api/sweet/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response.prtoductInfo);
        setPordicts(response.products);
      });
  }, []);

  const productAdd = (idProduct) => {
    console.log(idProduct);
    let rezult = getCookie("cart");
    if (rezult) {
      const obj = JSON.parse(rezult);
      if(obj[idProduct]){
        obj[idProduct] = Number(obj[idProduct]) +1;
      }else{ 
  
        obj[idProduct] =1;
      }
      const jsonString = JSON.stringify(obj);
      document.cookie = `cart=${jsonString }; domain:localhost ;path=/`;
    } else {
      document.cookie = `cart={"${idProduct}":"1"}; domain:localhost ;path=/`;
      console.log(document.cookie);
    }
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
            <img className="product__img-left" src={logo} alt="" />
          </div>
          <div className="product__block-right">
            <a className="product__exit-right" href="../../">
              <img
                className="product__exit-icon-right"
                src={iconExit}
                alt=""
              />
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
            <h4 className="product__subtitle-right">Доп.інформація</h4>
            <p className="product__dot-info-right">
              {product ? product.product_composition : "no dop-info"}
            </p>
            <div className="product__carzina-right">
              <button
                className="product__add-carzina-right"
                onClick={() => productAdd(id)}
              >
                Додати у кошик
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
