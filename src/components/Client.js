import React from "react";
import img from "../img/68ae92ac2a984a389b6e3b24441f6599.png";
import "../scss/_client.scss";

import { Link } from "react-router-dom";
const Client = ({ search, setsearch }) => {
  const onChangeHandler = (e) => {
    setsearch(e.target.value);
  };
  return (
    <div className="container">
      <div className="img">
        <img src={img} alt="Resim" />
      </div>
      <div class="search_wrap search_wrap_1">
        <div class="search_bo">
          <input
            onChange={onChangeHandler}
            type="text"
            class="input"
            placeholder="Ne Aramıştınız"
          />
          <div class="btn btn_common">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div id="buttons">
        <Link to="/login">
          <div className="login">
            <div id="uye">
              <img
                alt=""
                className="person"
                src="https://static.overlay-tech.com/assets/557c1939-3eac-4bde-8326-0350d0fd3705.svg"
              />
            </div>
            <div className="relativeWrapperOne">
              <p className="giris">Giriş Yap</p>
              <p className="ueye">Veya Üye ol</p>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <div id="Sepet">
            <div id="uye">
              <img
                alt=""
                className="person"
                src="https://static.overlay-tech.com/assets/557c1939-3eac-4bde-8326-0350d0fd3705.svg"
              />
            </div>
            <div className="relativeWrapperOne">
              <h6 id="sepet">Sepet</h6>
              <h6 id="ucret">0,00TL</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Client;
