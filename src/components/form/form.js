import React, { useState, useEffect } from "react";
import iconExit from "../../img/exit.svg";
import strelcka from "../../img/strelka.svg";
import "./form.css";
function Form() {
  const [products, setPordicts] = useState(null);
  const [allCartPrice, setAllCartPrice] = useState(null);
  const [region, setRegion] = useState(null);
  const [citi, setCityName] = useState(null);
  const [data, setData] = useState("");
  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [login, setLogin] = useState("");

  useEffect(() => {
    fetch("/api/cart/addOrderForm")
      .then((response) => response.json())
      .then((response) => {
        setPordicts(response.products);
        setAllCartPrice(response.allCartPrice);
        setRegion(response.region);
        setCityName(response.city);
        setLogin(response.client.IsLogin);
        console.log(response);
      });
  }, []);
  console.log(login);
  // const [dataComent, setDataComent] = useState("");

  if (login === false) {
    const result = window.confirm("для оформлення замовлення зайдіть в облік");
    if (result) {
      window.location.href = "/login";
    } else {
      window.location.href = "/basket";
    }
  }

  const handleChangeFio = (e) => {
    setFio(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };
  const postData = async () => {
    try {
      const dataObj = {
        phone: phone,
        region: "DP",
        city: "DP",
        addres: address,
        data: date,
        time: time,
      };
      const response = await fetch("/api/order/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });

      const responseData = await response.json();
      setData(responseData);
      if (responseData.isCreateOrder) {
        alert("замовлення успішно створено");
      } else {
        alert("замовлення не створено");
      }
      // console.log("Ответ сервера:", responseData);
    } catch (error) {
      alert("замовлення не створено");
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <section className="form">
      <div className="container">
        <div className="form__inner">
          <div className="form__top">
            <h3 className="form__title">Оформлення замовлення</h3>
            <a className="form__exit" href="../">
              <img className="form__img-exit" src={iconExit} alt="" />
            </a>
          </div>
          <div className="form__block">
            <div className="form__block-left">
              <div className="from__line-inputs">
                <input
                  className="from__inputs"
                  placeholder="ПІБ"
                  type="text"
                  value={fio}
                  onChange={handleChangeFio}
                />
                <input
                  className="from__inputs"
                  placeholder="E-MAIL"
                  type="text"
                  value={email}
                  onChange={handleChangeEmail}
                />
                <input
                  className="from__inputs"
                  placeholder="ТЕЛ+38(123)456 78 90"
                  type="number"
                  value={phone}
                  onChange={handleChangePhone}
                />
              </div>
              <div className="form__line__form">
                <div className="form__form-left from-form__block">
                  <h4 className="form__title-form">ДОСТАВКА</h4>
                  <select className="form__box">
                    <option className="form__box-opt">
                      {region ? region.region_name : ""}
                    </option>
                  </select>
                  <select className="form__box">
                    <option className="form__box-opt">
                      {citi ? citi.city_name : ""}
                    </option>
                  </select>
                  <input
                    className="form__box from__input-ctile"
                    placeholder="АДРЕСА"
                    type="text"
                    value={address}
                    onChange={handleChangeAddress}
                  />
                </div>
                <div className="form__form-right from-form__block">
                  <h4 className="form__title-form">ЧАС ДОСТАВКИ</h4>
                  <input
                    className="form__box from__input-ctile"
                    placeholder="ДАТА 00-00-2029"
                    type="text"
                    value={date}
                    onChange={handleChangeDate}
                  />
                  <input
                    className="form__box from__input-ctile"
                    placeholder="ЧАС 09 or 19"
                    type="number"
                    value={time}
                    onChange={handleChangeTime}
                  />
                </div>
              </div>
              <div className="form__inpput-tovar">
                <button className="dropbtn">
                  <span>МОЄ ЗАМОВЛЕННЯ</span> <img src={strelcka} alt="" />
                </button>
                <div className="dropdown-content">
                  {products
                    ? products.map((item) => {
                        return (
                          <div>
                            <div>назва:{item.name}</div>
                            <div>кількість:{item.count}</div>
                            <div>цiна:{item.price}</div>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
            <div className="form__right-block">
              <div className="form__line">
                <span className="form__text-delivary">
                  До безкоштовної доствки
                </span>
                <span className="form__sum">
                  228<span className="form__value">грн</span>
                </span>
              </div>
              <div className="form__line line-mide">
                <span className="form__text-delivary">Сума заказу</span>
                <span className="form__sum">
                  1000<span className="form__value">грн</span>
                </span>
              </div>
              <div className="form__line">
                <span className="form__text-delivary">Разом</span>
                <span className="form__sum">
                  <span className="form__final-price">
                    1228<span className="form__value">грн</span>
                  </span>
                  <div className="form__dop-info">Без урахування доставки</div>
                </span>
              </div>
              <div className="form__line">
                <button className="form__design" onClick={() => postData()}>
                  Сплатити замолвення
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
