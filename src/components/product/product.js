import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./product.css";
import logo from "../../img/img-product.jpg";
function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setPordicts] = useState(null);
  useEffect(() => {
    fetch(`/api/sweet/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setProduct(response.prtoductInfo);
        setPordicts(response.products);
      });
  }, []);
  console.log(products);
  //   const productColor = products.map((item) => {
  //     return (
  //       <a
  //         className="product__item-colors-right"
  //         style={{ backgroundColor: item.product_color }}
  //         href="#"
  //       ></a>
  //     );
  //   });
  return (
    <section className="product">
      <div className="container">
        <div className="product__inner">
          <div className="product__block-left">
            <img className="product__img-left" src={logo} alt="" />
          </div>
          <div className="product__block-right">
            <a className="product__exit-right" href="../../">
              Exit
            </a>
            <h2 className="product__title-right">{product? product.product_name: "noname" }</h2>
            <div className="product__price-right">
            {product? product.product_price: "0" } <span className="product__price-valuta-right">грн</span>
            </div>
            <div className="product__time-right">
              <span className="product__time-number">{product? product.maxtime: "0" } години</span>
            </div>
            <div className="product__colors-right">
              <p className="product__title-color-right">Колір:</p>
              <div className="product__list-colors-right">
                {/* {productColor? productColor :"LLL"} */}
                {products
                  ? products.map((item) => {
                    let a = `http://localhost:3000/product/${item.productid}`;
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
            {product? product.product_composition: "no dop-info" }
            </p>
            <div className="product__carzina-right">
              <a className="product__add-carzina-right" href="#">
                Додати у кошик
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
