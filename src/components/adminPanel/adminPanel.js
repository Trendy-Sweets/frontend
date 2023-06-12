import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./adminPanel.css";

function AdminPanel() {
  const [response, setResponse] = useState(null);
  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);
  const [response3, setResponse3] = useState(null);
  const [user, setUser] = useState(null);
  const [logout, setLogout] = useState(null);
  useEffect(() => {
    fetch("/api/admin")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setResponse(response.executerWhait);
        setResponse1(response.executerAllowed);
        setResponse2(response.executerReady);
        setResponse3(response.orderRun);
        setUser(response.okLogin.userName);
        setLogout(response.okLogin.isLogin);
      });
  }, []);
  const exitF = () => {
    fetch(`/api/admin/logout`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        window.location.href = "../admin";
      });
  };

  return (
    <section className="adminPanel">
      <div className="container">
        <div className="adminPanel__inner">
          {logout ? (
            <>
              <div className="adminPanel__header">
                <span className="adminPanel__name-pajes">Адмін.панель</span>
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
                  <a className="adminPanel__button-left" href="#">
                    Управління виконавцями
                  </a>
                  <a className="adminPanel__button-left" href="#">
                    Управління замовленнями
                  </a>
                  <a
                    className="adminPanel__button-left admin__activ-btn"
                    href="../adminProduct"
                  >
                    Управління товарами
                  </a>
                  <a className="adminPanel__button-left" href="#">
                    Фінанси облік
                  </a>
                  <a className="adminPanel__button-left" href="#">
                    Налаштування системи
                  </a>
                </div>

                <div className="adminPanel__right">
                  <div className="adminPanel__body-right">
                    <p className="adminPanel__punt-right">
                      Заявки на підтвердження виконавців:
                      <span className="adminPanel_red-right">
                        {response ? response : 0}
                      </span>
                    </p>
                    <p className="adminPanel__punt-right">
                      Усього підтверджених виконавців до систем:
                      <span className="adminPanel_black-right">
                        {response1 ? response1 : 0}
                      </span>
                    </p>
                    <p className="adminPanel__punt-right">
                      Число виконавців готових прийняти замовлення:
                      <span className="adminPanel_green-right">
                        {response2 ? response2 : 0}
                      </span>
                    </p>
                    <p className="adminPanel__punt-right adminPanel__punt-right-last">
                      Замовлень у роботі:
                      <span className="adminPanel_green-right">
                        {response3 ? response3 : 0}
                      </span>
                    </p>
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

export default AdminPanel;
