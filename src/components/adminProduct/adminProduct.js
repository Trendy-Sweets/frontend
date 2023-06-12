import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./adminProduct.css";

function AdminProduct() {
  const [products, setProducts] = useState(null);
  const [logout, setLogout] = useState(null);
  const [user, setUser] = useState(null);
  const exitF = () => {
    fetch(`/api/admin/logout`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        window.location.href = "../admin";
      });
  };
  useEffect(() => {
    fetch("/api/admin/products")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setProducts(response.products);
        setLogout(response.okLogin.isLogin);
        setUser(response.okLogin.userName);
      });
  }, []);
  console.log(products);
  const prods = (arr) => {
    return arr.map((item) => {
      return (
        <p className="adminPanel__punt-right">
          #{item.productId}
          <span className="admin__name-prod">{item.productName}</span>
          <span className="adminPanel__punt-dop">Статус: опубліковано</span>
          <a className="admin__punt-button" href="#">
            редагувати
          </a>
        </p>
      );
    });
  };
  return (
    <section className="adminPanel">
      <div className="container">
        <div className="adminPanel__inner">
          {logout ? (
            <>
              <div className="adminPanel__header">
                <span className="adminPanel__name-pajes ">
                  Управління товарами
                </span>
                <div className="adminPanel__header-right">
                  <span className="adminPanel__name-panel">
                    {user ? user : ""}
                  </span>
                  <button className="adminPanel__exit" onClick={() => exitF()}>
                    Вихід
                  </button>
                </div>
              </div>

              <div className="adminPanel__body">
                <div className="adminPanel__left">
                  <a
                    className="adminPanel__button-left admin__activ-btn"
                    href="../adminMain"
                  >
                    На головну
                  </a>
                  <a
                    className="adminPanel__button-left admin__activ-btn"
                    href="../adminGrupt"
                  >
                    Создать группу продуктов
                  </a>
                  <a className="adminPanel__button-left" href="">
                    Створити продукт
                  </a>
                </div>

                <div className="adminPanel__right">
                  <div className="adminPanel__body-right">
                    {products
                      ? products.map((item) => {
                          const prod = prods(item.products);

                          return (
                            <>
                              <p className="adminPanel__punt-right adminPanel__title-right">
                                Група: {item.productgroupName}
                                <span className="adminPanel__punt-dop">
                                  Статус: опубліковано
                                </span>
                                <a className="admin__punt-button" href="#">
                                  редагувати
                                </a>
                              </p>
                              {prod}
                            </>
                          );
                        })
                      : "loding"}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h3 className="adminPanel__puth-title">
              Ви не авторезовані в адмін панель
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default AdminProduct;
