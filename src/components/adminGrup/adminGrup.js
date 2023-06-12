import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

import "./adminGrup.css";

function AdminGrup() {
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
            <span className="adminPanel__name-pajes">Створення групи</span>
            <div className="adminPanel__header-right">
              <span className="adminPanel__name-panel">
                Адмістратор системи
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
                href="../adminProduct"
              >
                На управління виконавцями
              </a>
              <a
                className="adminPanel__button-left adminPanel__button-left-active"
                href="#"
              >
                Створити групу продуктів
              </a>
              <a className="adminPanel__button-left" href="#">
                Створити продукт
              </a>
            </div>

            <div className="adminPanel__right">
              <div className="adminPanel__body-right">
                <input
                  className="adminPanel__input-body"
                  type="text"
                  placeholder="Названия группы"
                  onChange="{handleChange}"
                />
                <input
                  className="admin__right__input-file"
                  type="file"
                  name="image"
                />
                <div className="admin__chek">
                  <input
                    className="admin__checkbox-right"
                    id="html"
                    type="checkbox"
                  />
                  <span className="admin__chek-span">опублікувати?</span>
                </div>

                <button className="admin__btn-add">Створити групу</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminGrup;
