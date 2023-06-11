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
                <span className="adminPanel__name-pajes">Aдмин.панель</span>
                <div className="adminPanel__header-right">
                  <span className="adminPanel__name-panel">
                    {user ? user : ""}
                  </span>
                  <button className="adminPanel__exit" onClick={() => exitF()}>
                    Выход
                  </button>
                </div>
              </div>

              <div className="adminPanel__body">
                <div className="adminPanel__left">
                  <a className="adminPanel__button-left" href="#">
                    Управление исполнителями
                  </a>
                  <a className="adminPanel__button-left" href="#">
                    Управление заказами
                  </a>
                  <a className="adminPanel__button-left" href="../adminProduct">
                    Управление товарами
                  </a>
                  <a className="adminPanel__button-left" href="#">
                    Финансы учет
                  </a>
                  <a className="adminPanel__button-left" href="#">
                    Настройка системы
                  </a>
                </div>

                <div className="adminPanel__right">
                  <div className="adminPanel__body-right">
                    <p className="adminPanel__punt-right">
                      Заявки на подтверждение исполнителей:
                      <span className="adminPanel_red-right">
                        {response ? response : 0} шт.
                      </span>
                    </p>
                    <p className="adminPanel__punt-right">
                      Всего подтвержденных исполнителей в систем:
                      <span className="adminPanel_black-right">
                        {response1 ? response1 : 0}
                      </span>
                    </p>
                    <p className="adminPanel__punt-right">
                      Число исполнителей готовых принять заказ:
                      <span className="adminPanel_green-right">
                        {response2 ? response2 : 0}
                      </span>
                    </p>
                    <p className="adminPanel__punt-right adminPanel__punt-right-last">
                      Заказов в работе:
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
              Вы не авторезированы в админ панель
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
