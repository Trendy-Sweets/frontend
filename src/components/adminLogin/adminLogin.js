import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import iconExit from "../../img/exit-new.svg";
import "./adminLogin.css";
function AdminLogin() {
  const [email, setEmail] = useState("admin@trendysweets.com.ua");
  const [password, setPassword] = useState("admin");
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
      const response = await fetch("/api/admin/login", {
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
    <section className="adminLogin">
      <div className="container">
        <div className="adminLogin__inner">
          <a className="reg__exit" href="../">
            <img src={iconExit} alt="" />
          </a>
          <div className="reg__line">
            <a className="reg__exit" href="../">
              <img src={iconExit} alt="" />
            </a>
            <div className="adminLogin__line">
              <div className="adminLogin__block">
                <h3 className="adminLogin__title">Aдмін панель</h3>
                <input
                  className="adminLogin__gmail-input adminLogin-input"
                  type="text"
                  placeholder="Пошта"
                  value={email}
                  onChange={handleChangeEmail}
                />
                <div className="adminLogin__bottom-test">
                  {data ? (data.email.isOk ? "" : data.email.msg) : ""}
                </div>
                <input
                  className="adminLogin__gmail-input adminLogin-input"
                  type="text"
                  placeholder="Пароль"
                  value={password}
                  onChange={handleChangePassword}
                />
                <div className="adminLogin__bottom-test">
                  {data ? (data.password.isOk ? "" : data.password.msg) : ""}
                </div>

                <div className="adminLogin__block-button">
                  <button
                    className="adminLogin__button"
                    onClick={() => postData()}
                  >
                    увійти
                  </button>
                </div>
                <div className="adminLogin-block-adminLogin">
                  <a className="adminLogin__str-adminLogin" href="../reg">
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

export default AdminLogin;
