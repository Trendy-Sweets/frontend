import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import iconExit from "../../img/exit-new.svg";
import "./reg.css";

function Reg() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [dopPassword, setDopPassword] = useState("");
  const [data, setData] = useState("");
  const result = '';
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeDopPassword = (e) => {
    setDopPassword(e.target.value);
  };
    
  const postData = async () => {
    console.log(typeof name);
    try {
      const data = {
      "name": `${name}`,
      "email": `${email}`,
      "password": `${password}`,
      "repassword": `${dopPassword}`
      };
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setData(responseData);
      console.log("Ответ сервера:", responseData);
    
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };
  if(data.okForm){
    window.confirm('Ви успішно зареєстровані');
    window.location.href = '../login';
  }
   
  return (
    <section className="reg">
      <div className="container">
        <div className="reg__inner">
          <a className="reg__exit" href="../">
            <img src={iconExit} alt="" />
          </a>
          <div className="reg__line">
            <div className="reg__block">
              <h3 className="reg__title">Реєстрація</h3>
              <input
                className="reg__gmail-input reg-input"
                type="text"
                placeholder="Пошта"
                value={email}
                onChange={handleChangeEmail}/>
              <div className="reg__bottom-test">{data? data.email.isOk? "" :data.email.msg:""}</div>
              <input
                className="reg__gmail-input reg-input"
                type="text"
                placeholder="Ім’я"
                value={name}
                onChange={handleChangeName}
              />
              <div className="reg__bottom-test">{data? data.name.isOk? "" :data.name.msg:""}</div>
              <input
                className="reg__gmail-input reg-input"
                type="text"
                placeholder="Пароль"
                value={password}
                onChange={handleChangePassword}
              />
              <div className="reg__bottom-test">{data? data.password.isOk? "" :data.password.msg:""}</div>
              <input
                className="reg__gmail-input reg-input"
                type="text"
                placeholder="Підтвердження паролю"
                value={dopPassword}
                onChange={handleChangeDopPassword}
              />
              <div className="reg__bottom-test">{data? data.repassword.isOk? "" :data.repassword.msg:""}</div>
              <div className="reg__block-button">
                <button className="reg__button" onClick={() => postData()}>
                  увійти
                </button>
              </div>
              <div className="reg-block-login">
                <a className="reg__str-login" href="../login">
                  В мене є аккаунт
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Reg;
