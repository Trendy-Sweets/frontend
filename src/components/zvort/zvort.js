import "./zvort.css";
import img from "../../img/Sitting.png";
import iconF from "../../img/fesbock.svg";
import iconT from "../../img/tik.svg";
import iconI from "../../img/instagram.svg";
import icon from "../../img/exit.svg";
function Zvort() {
  return (
    <section className="zvorot">
      <div className="container">
        <div className="zvorot__inner">
          <div className="zvorot-header">
            <h3 className="zvorot__title">Зворотній зв’язок</h3>
            <a className="basket__exit zvorot-exit" href="../">
              <img className="basket__img-exit" src={icon} alt="" />
            </a>
          </div>
          <div className="zvorot__block">
            <div className="zvorot__block-left">
              <input
                className="zvorot-fio-input zvorot-input"
                type="text"
                placeholder="ПIБ"
                onChange="{handleChange}"
              />
              <input
                className="zvorot-phon-input zvorot-input"
                type="text"
                placeholder="Номер телефону"
                onChange="{handleChange}"
              />
              <input
                className="zvorot-phon-input zvorot-input"
                type="text"
                placeholder="Електронна пошта"
                onChange="{handleChange}"
              />
              <textarea
                className="zvorot-info-input zvorot-input-big"
                rows="10"
                cols="45"
                name="text"
              ></textarea>
              <div className="check">
                <input type="checkbox" id="scales" name="scales" disabled />
                <span className="checkbox__text">
                  Я ознайомлений із правилами Політика конфіденційності
                </span>
              </div>
              <button className="zvorot-button">Відправити</button>
            </div>
            <div className="zvorot__block-right">
              <h4 className="zvorot__title-right">Контакти офісу</h4>
              <div className="zvorot-phone-right">Тел. 380123456789</div>
              <div className="zvorot-phone-right">Тел. 380123456789</div>
              <div className="zvorot__block-sub-right">
                <div className="zvorot__left-line">
                  <h5 className="zvorot__title-left-line">ПРО КОМПАНІЮ</h5>

                  <div>
                    <a className="zvorot__text-left-line" href="#">
                      Про нас
                    </a>
                  </div>
                  <div>
                    <a className="zvorot__text-left-line" href="#">
                      Новини
                    </a>
                  </div>
                  <div>
                    <a className="zvorot__text-left-line" href="#">
                      Відгуки та пропозиції
                    </a>
                  </div>
                  <div>
                    <a className="zvorot__text-left-line" href="#">
                      Співпраця
                    </a>
                  </div>
                  <div>
                    <a className="zvorot__text-left-line" href="#">
                      Оплата та доставка
                    </a>
                  </div>
                  <div>
                    <a className="zvorot__text-left-line" href="#">
                      Повернення та брак
                    </a>
                  </div>
                  <div>
                    <a className="zvorot__text-left-line" href="#">
                      Контакти
                    </a>
                  </div>
                  <div>
                    <a className="zvorot__text-left-line" href="#">
                      Публічна оферта
                    </a>
                  </div>
                </div>
                <div className="zvorot__right-line">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="zvorot__line-bottom">
                <a href="#">
                  <img src={iconF} alt="" />
                </a>
                <a href="#">
                  <img src={iconI} alt="" />
                </a>
                <a href="#">
                  <img src={iconT} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Zvort;
