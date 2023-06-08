import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import iconExit from "../../img/exit-new.svg";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const postData = async () => {
    try {
      const data = {
        email: `${email}`,
        password: `${password}`,
      };
      const response = await fetch("/api/login", {
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
  if (data.okForm) {
    window.location.href = "../";
  }

  return (
    <section className="login">
      <div className="container">
        <div className="login__inner">
          <a className="reg__exit" href="../">
            <img src={iconExit} alt="" />
          </a>
          <div className="reg__line">
            <a className="reg__exit" href="../">
              <img src={iconExit} alt="" />
            </a>
            <div className="login__line">
              <div className="login__block">
                <h3 className="login__title">Вхід</h3>
                <input
                  className="login__gmail-input login-input"
                  type="text"
                  placeholder="Пошта"
                  value={email}
                  onChange={handleChangeEmail}
                />
                <div className="login__bottom-test">
                  {data ? (data.email.isOk ? "" : data.email.msg) : ""}
                </div>
                <input
                  className="login__gmail-input login-input"
                  type="text"
                  placeholder="Пароль"
                  value={password}
                  onChange={handleChangePassword}
                />
                <div className="login__bottom-test">
                  {data ? (data.password.isOk ? "" : data.password.msg) : ""}
                </div>

                <div className="login__block-button">
                  <button className="login__button" onClick={() => postData()}>
                    увійти
                  </button>
                </div>
                <div className="login-block-login">
                  <a className="login__str-login" href="../reg">
                    зареєструватись
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
