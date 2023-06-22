import iconProfile from "../../img/icon-profile.svg";
import React, { useState, useEffect } from "react";
import "./mainPanel.css";

function MainPanel({ basketPrice, logaut, cart }) {
  const [exitStatus, setExitStatus] = useState(null);
  const exitF = () => {
    fetch(`/api/logout`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        window.location.reload();
      });
  };
  const e = () => {
    window.location.href = "/myOrder";
  };
  const zvorot = () => {
    window.location.href = "/zvort";
  };
  return (
    <div className="main__panel">
      <a className="main__dop-info-panel" href="../zvort">
        Заробляй з нами
      </a>
      <a className="main__basket-panel" href="/basket">
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2285 6.55209C15.4679 5.87578 15.911 5.29028 16.4968 4.87617C17.0827 4.46207 17.7825 4.23971 18.4999 4.23971C19.2173 4.23971 19.9171 4.46207 20.503 4.87617C21.0888 5.29028 21.532 5.87578 21.7713 6.55209C21.8219 6.69533 21.9003 6.8272 22.0019 6.94016C22.1034 7.05312 22.2263 7.14498 22.3633 7.21047C22.5004 7.27596 22.649 7.31382 22.8007 7.32187C22.9524 7.32993 23.1042 7.30802 23.2475 7.25741C23.3907 7.20679 23.5226 7.12846 23.6355 7.02689C23.7485 6.92531 23.8404 6.80248 23.9059 6.66541C23.9714 6.52834 24.0092 6.3797 24.0173 6.228C24.0253 6.0763 24.0034 5.9245 23.9528 5.78126C23.5542 4.65378 22.8158 3.6776 21.8394 2.98716C20.863 2.29671 19.6966 1.92596 18.5007 1.92596C17.3048 1.92596 16.1384 2.29671 15.1619 2.98716C14.1855 3.6776 13.4472 4.65378 13.0486 5.78126C12.9951 5.92506 12.9707 6.07807 12.9769 6.23138C12.9831 6.38469 13.0198 6.53523 13.0848 6.67423C13.1498 6.81322 13.2418 6.93789 13.3554 7.04098C13.4691 7.14406 13.6021 7.22349 13.7468 7.27464C13.8914 7.32579 14.0448 7.34764 14.198 7.33892C14.3512 7.33019 14.5011 7.29106 14.639 7.22381C14.7769 7.15656 14.9001 7.06253 15.0013 6.94721C15.1025 6.83188 15.1797 6.69757 15.2285 6.55209ZM4.2395 9.25001C4.2395 8.94335 4.36132 8.64926 4.57816 8.43242C4.795 8.21558 5.0891 8.09376 5.39575 8.09376H31.6041C31.9107 8.09376 32.2048 8.21558 32.4217 8.43242C32.6385 8.64926 32.7603 8.94335 32.7603 9.25001C32.7603 9.55667 32.6385 9.85076 32.4217 10.0676C32.2048 10.2844 31.9107 10.4063 31.6041 10.4063H5.39575C5.0891 10.4063 4.795 10.2844 4.57816 10.0676C4.36132 9.85076 4.2395 9.55667 4.2395 9.25001ZM7.88863 11.951C8.19443 11.9307 8.49579 12.0326 8.72648 12.2344C8.95716 12.4362 9.0983 12.7213 9.11888 13.0271L9.82804 23.6646C9.96679 25.7412 10.0655 27.1873 10.2813 28.2742C10.4925 29.3302 10.7854 29.8883 11.2063 30.283C11.6287 30.6776 12.2053 30.9336 13.2721 31.0723C14.3729 31.2157 15.822 31.2188 17.9033 31.2188H19.0965C21.1778 31.2188 22.627 31.2157 23.7277 31.0723C24.7945 30.9336 25.3711 30.6776 25.7935 30.283C26.2144 29.8883 26.5073 29.3302 26.7185 28.2742C26.9344 27.1873 27.033 25.7412 27.1718 23.6646L27.881 13.0271C27.8911 12.8756 27.931 12.7275 27.9983 12.5914C28.0656 12.4552 28.1591 12.3337 28.2734 12.2337C28.3878 12.1337 28.5206 12.0572 28.6645 12.0086C28.8084 11.9599 28.9604 11.9401 29.112 11.9502C29.2635 11.9604 29.4116 12.0002 29.5477 12.0676C29.6838 12.1349 29.8054 12.2284 29.9054 12.3427C30.0054 12.457 30.0819 12.5899 30.1305 12.7338C30.1791 12.8777 30.199 13.0297 30.1888 13.1813L29.4735 23.8989C29.3425 25.8753 29.2361 27.4725 28.9863 28.7274C28.7258 30.0301 28.2849 31.1186 27.3722 31.9711C26.4611 32.8252 25.3449 33.1936 24.0268 33.3648C22.7595 33.5313 21.1593 33.5313 19.1767 33.5313H17.8231C15.8405 33.5313 14.2403 33.5313 12.973 33.3648C11.6549 33.1936 10.5388 32.8252 9.62763 31.9711C8.71496 31.1186 8.27404 30.0286 8.0135 28.7274C7.76375 27.4725 7.65892 25.8753 7.52634 23.8989L6.811 13.1813C6.80095 13.0297 6.82086 12.8777 6.86958 12.7338C6.9183 12.59 6.99488 12.4571 7.09496 12.3429C7.19503 12.2286 7.31663 12.1352 7.45281 12.068C7.58899 12.0008 7.73708 11.961 7.88863 11.951Z"
            fill="#321A06"
          />
        </svg>
        {cart ? <span className="main__basket-counter">{cart}</span> : ""}
      </a>
      <a className="main__balance-panel" href="#">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6666 20C31.6666 20.4421 31.491 20.866 31.1784 21.1786C30.8659 21.4911 30.4419 21.6667 29.9999 21.6667C29.5579 21.6667 29.134 21.4911 28.8214 21.1786C28.5088 20.866 28.3333 20.4421 28.3333 20C28.3333 19.558 28.5088 19.1341 28.8214 18.8215C29.134 18.509 29.5579 18.3334 29.9999 18.3334C30.4419 18.3334 30.8659 18.509 31.1784 18.8215C31.491 19.1341 31.6666 19.558 31.6666 20Z"
            fill="#321A06"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5733 5.41669H21.7599C24.8233 5.41669 27.2499 5.41669 29.1483 5.67169C31.1016 5.93502 32.6833 6.48835 33.9316 7.73502C35.4716 9.27669 35.9632 11.34 36.1416 14.0184C37.1032 14.44 37.8299 15.335 37.9083 16.4684C37.9166 16.57 37.9166 16.6784 37.9166 16.7784V23.2217C37.9166 23.3217 37.9166 23.43 37.9099 23.53C37.8299 24.6634 37.1032 25.56 36.1416 25.9834C35.9632 28.66 35.4716 30.7234 33.9316 32.265C32.6833 33.5117 31.1016 34.065 29.1483 34.3284C27.2483 34.5834 24.8233 34.5834 21.7599 34.5834H16.5733C13.5099 34.5834 11.0833 34.5834 9.18492 34.3284C7.23159 34.065 5.64992 33.5117 4.40159 32.265C3.15492 31.0167 2.60159 29.435 2.33825 27.4817C2.08325 25.5817 2.08325 23.1567 2.08325 20.0934V19.9067C2.08325 16.8434 2.08325 14.4167 2.33825 12.5184C2.60159 10.565 3.15492 8.98335 4.40159 7.73502C5.64992 6.48835 7.23159 5.93502 9.18492 5.67169C11.0849 5.41669 13.5099 5.41669 16.5733 5.41669ZM33.6133 26.25H30.3833C26.8083 26.25 23.7483 23.5367 23.7483 20C23.7483 16.4634 26.8083 13.75 30.3816 13.75H33.6116C33.4216 11.515 32.9933 10.3334 32.1616 9.50335C31.4566 8.79835 30.4899 8.37502 28.8133 8.15002C27.1016 7.92002 24.8433 7.91669 21.6649 7.91669H16.6649C13.4866 7.91669 11.2299 7.92002 9.51492 8.15002C7.83992 8.37502 6.87325 8.79835 6.16825 9.50335C5.46325 10.2084 5.03992 11.175 4.81492 12.8517C4.58492 14.565 4.58159 16.8217 4.58159 20C4.58159 23.1784 4.58492 25.435 4.81492 27.15C5.03992 28.825 5.46325 29.7917 6.16825 30.4967C6.87325 31.2017 7.83992 31.625 9.51659 31.85C11.2299 32.08 13.4866 32.0834 16.6649 32.0834H21.6649C24.8433 32.0834 27.1016 32.08 28.8149 31.85C30.4899 31.625 31.4566 31.2017 32.1616 30.4967C32.9933 29.6667 33.4233 28.4867 33.6133 26.25ZM34.8732 16.25H30.3833C28.0099 16.25 26.2483 18.015 26.2483 20C26.2483 21.985 28.0099 23.75 30.3816 23.75H34.9116C35.2549 23.7284 35.4033 23.4967 35.4149 23.3567V16.6434C35.4033 16.5034 35.2549 16.2717 34.9116 16.2517H34.8716L34.8732 16.25ZM11.6666 13.75C11.9981 13.75 12.316 13.8817 12.5505 14.1161C12.7849 14.3506 12.9166 14.6685 12.9166 15V25C12.9166 25.3315 12.7849 25.6495 12.5505 25.8839C12.316 26.1183 11.9981 26.25 11.6666 26.25C11.3351 26.25 11.0171 26.1183 10.7827 25.8839C10.5483 25.6495 10.4166 25.3315 10.4166 25V15C10.4166 14.6685 10.5483 14.3506 10.7827 14.1161C11.0171 13.8817 11.3351 13.75 11.6666 13.75Z"
            fill="#321A06"
          />
        </svg>

        <span className="main__balance-number-panel">
          {basketPrice ? basketPrice : "0"}
          <span className="main__balance-valuta-panel">грн</span>
        </span>
      </a>
      <div className="main__authorization-panel">
        {logaut ? (
          logaut.IsLogin ? (
            <span className="main__profile">
              <img src={iconProfile} />{" "}
              <span className="main__profile-name"> {logaut.clientName}</span>{" "}
            </span>
          ) : (
            <>
              <a className="main__btn-log-panel" href="login">
                ВХІД
              </a>
              <a className="main__btn-reg-panel" href="reg">
                РЕЄСТРАЦІЯ
              </a>
            </>
          )
        ) : (
          <>
            <a className="main__btn-log-panel" href="login">
              ВХІД
            </a>
            <a className="main__btn-reg-panel" href="reg">
              РЕЄСТРАЦІЯ
            </a>
          </>
        )}
      </div>
      <div class="dropdown01 main__burger-menu-panel">
        <button class="dropbtn01">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66748 8.04877H33.3341M6.66748 18.0488H33.3341M6.66748 28.0488H33.3341"
              stroke="#321A06"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="dropdown-content">
          <button className="drop__button" onClick={() => zvorot()}>
            Зворотний зв'язок
          </button>
          {logaut ? (
            logaut.IsLogin ? (
              <>
                <button className="drop__button" onClick={() => exitF()}>
                  Виxiд
                </button>
                <button className="drop__button" onClick={() => e()}>
                  Mої замовлення
                </button>
              </>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPanel;
