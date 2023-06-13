import React, { useState, useEffect } from "react";
import "./canditer.css";
import img from "../../img/img-product.png";
function Canditer() {
  return (
    <section class="canditer">
      <div class="container">
        <div class="canditer__inner">
          <div class="canditer__hader">
            <h2 class="canditer__title">Особистий кабінет кондитера</h2>
            <span class="canditer__sub-title">Кондитер: Лена</span>
            <button class="canditer__exit">Вийти</button>
          </div>
          <div class="canditer__body">
            <div class="candinter__left">
              <div class="canditer-obverka">
                <a href="#" class="canditer-a">
                  Особистий кабінет кондитера
                </a>
              </div>
              <div class="canditer-obverka">
                <a href="#" class="canditer-a">
                  Історія моїх замовлень
                </a>
              </div>
              <div class="canditer-obverka">
                <a href="#" class="canditer-a">
                  Що я готовий(а) робити
                </a>
              </div>
              <div class="canditer-obverka">
                <a href="#" class="canditer-a">
                  Навчання
                </a>
              </div>
            </div>
            <div class="canditer__right">
              <div class="canditer__text">
                <span>Статус: Очікує розірвання адміністрації</span>
                <span class="last-caditer">допущення до роботи</span>
              </div>
              <div class="canditer__text">
                <span>Я готовий приймати замовлення</span>
                <span>
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="email"
                  />
                  <label for="contactChoice1">Так</label>

                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="phone"
                  />
                  <label for="contactChoice2">Hi</label>
                </span>
              </div>
              <div class="canditer__text">Замовлення, які я виконую:</div>
              <div class="canditer__list">
                <div class="canditer__item">
                  <div class="canditer__top-item">
                    <span class="canditer__top-id0">Замовлення N93456</span>
                    <span class="canditer__top-date">
                      Дата видачі: 15.06.2023
                    </span>
                  </div>
                  <div class="canditer-dis">
                    <img src={img} alt="" />
                    <span class="canditer__nam">Товар № 1</span>
                    <span>Кількість: 2</span>
                    <a href="#">Відкрити рецепт</a>

                    <span>
                      <div>Розрахунковий час виконання: 72 часа</div>
                      <div>Залишилось: 30 годин</div>
                    </span>
                    <div class="canditer-aa">
                      <button>Замовлення виконано</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Canditer;
