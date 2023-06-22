import "./zvort.css";
import img from "../../img/Sitting.png";
import iconF from "../../img/fesbock.svg";
import iconT from "../../img/tik.svg";
import iconI from "../../img/instagram.svg";
import icon from "../../img/exit.svg";
import React, { useState } from "react";
function Zvort() {
  const [isChecked, setIsChecked] = useState(false);
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("+38(099)888 44 33");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleChangeFio = (e) => {
    setFio(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const postData = async () => {
    if (isChecked) {
      console.log(fio);
      console.log(phone);
      console.log(email);
      console.log(text);
      const dataObj = {
        fio: fio,
        email: email,
        phone: phone,
        message: text,
      };
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.okSend) {
        alert("заявку успішно створено");
        setFio("");
        setEmail("");
        setIsChecked(false);
        setText("");
      } else {
        alert("заявку не створена");
      }
      // console.log("Ответ сервера:", responseData);
    } else {
      alert("ви не натиснули угоду");
    }
  };
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
                value={fio}
                onChange={handleChangeFio}
              />
              <input
                className="zvorot-phon-input zvorot-input"
                type="text"
                placeholder="Номер телефону"
                value={phone}
                onChange={handleChangePhone}
              />
              <input
                className="zvorot-phon-input zvorot-input"
                type="text"
                placeholder="Електронна пошта"
                value={email}
                onChange={handleChangeEmail}
              />
              <textarea
                className="zvorot-info-input zvorot-input-big"
                rows="10"
                cols="45"
                name="text"
                value={text}
                onChange={handleChangeText}
              ></textarea>
              <div className="check">
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox__text">
                  Я ознайомлений із правилами Політика конфіденційності
                </span>
              </div>
              <button className="zvorot-button" onClick={() => postData()}>
                Відправити
              </button>
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
