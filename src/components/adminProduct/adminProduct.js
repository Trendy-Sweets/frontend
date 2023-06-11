import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

import "./adminProduct.css";

function AdminProduct() {
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
          <div className="adminPanel__header">
            <span className="adminPanel__name-pajes">Управления товарами</span>
            <div className="adminPanel__header-right">
              <span className="adminPanel__name-panel">
                Адмистратор системы
              </span>
              <button className="adminPanel__exit" onClick={() => exitF()}>
                Выход
              </button>
            </div>
          </div>

          <div className="adminPanel__body">
            <div className="adminPanel__left">
              <a className="adminPanel__button-left" href="../adminMain">
                На главную
              </a>
              <a className="adminPanel__button-left" href="../adminGrupt">
                Создать группу продуктов
              </a>
              <a className="adminPanel__button-left" href="">
                Создать продукт
              </a>
            </div>

            <div className="adminPanel__right">
              <div className="adminPanel__body-right">
                <p className="adminPanel__punt-right adminPanel__title-right">
                  Группа: Шоко-бомба Микс+
                  <span className="adminPanel__punt-dop">
                    Статус: опубликован
                  </span>
                  <a className="admin__punt-button" href="#">
                    редактировать
                  </a>
                </p>
                <p className="adminPanel__punt-right">
                  Продукт: Щоко-бомба Black Edition
                  <span className="adminPanel__punt-dop">
                    Статус: снят с публикации
                  </span>
                  <a className="admin__punt-button" href="#">
                    редактировать
                  </a>
                </p>
                <p className="adminPanel__punt-right">
                  Продукт: Щоко-бомба White Chocolate
                  <span className="adminPanel__punt-dop">
                    Статус: опубликован
                  </span>
                  <a className="admin__punt-button" href="#">
                    редактировать
                  </a>
                </p>

                <p className="adminPanel__punt-right adminPanel__title-right">
                  Группа: Шоко-бомба Микс+
                  <span className="adminPanel__punt-dop">
                    Статус: опубликован
                  </span>
                  <a className="admin__punt-button" href="#">
                    редактировать
                  </a>
                </p>
                <p className="adminPanel__punt-right">
                  Продукт: Щоко-бомба Black Edition
                  <span className="adminPanel__punt-dop">
                    Статус: снят с публикации
                  </span>
                  <a className="admin__punt-button" href="#">
                    редактировать
                  </a>
                </p>
                <p className="adminPanel__punt-right">
                  Продукт: Щоко-бомба White Chocolate
                  <span className="adminPanel__punt-dop">
                    Статус: опубликован
                  </span>
                  <a className="admin__punt-button" href="#">
                    редактировать
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminProduct;
