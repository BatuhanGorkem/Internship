import React from "react";
import img from "../img/68ae92ac2a984a389b6e3b24441f6599.png";

import "../css/cart.css";
const ShoppingCart = () => {
  return (
    <div class="wrapper">
      <div class="project">
        <div class="shop">
          <div class="box">
            <img src={img} />
            <div class="content">
              <h3>Oyuncak</h3>
              <h4>Fiyat: 40TL </h4>
              <p class="unit">
                Adet: <input name="" value="2" />
              </p>
              <p class="btn-area">
                <i aria-hidden="true" class="fa fa-trash"></i>{" "}
                <span class="btn2">Kaldır</span>
              </p>
            </div>
          </div>
          <div class="box">
            <img src={img} />
            <div class="content">
              <h3>Çanta</h3>
              <h4>Fiyat: 40TL</h4>
              <p class="unit">
                Adet: <input name="" value="1" />
              </p>
              <p class="btn-area">
                <i aria-hidden="true" class="fa fa-trash"></i>{" "}
                <span class="btn2">Kaldır</span>
              </p>
            </div>
          </div>
          <div class="box">
            <img src={img} />
            <div class="content">
              <h3>Çamaşır Makinesi</h3>
              <h4>Fiyat: 250TL</h4>
              <p class="unit">
                Adet: <input name="" value="0" />
              </p>
              <p class="btn-area">
                <i aria-hidden="true" class="fa fa-trash"></i>{" "}
                <span class="btn2">Kaldır</span>
              </p>
            </div>
          </div>
        </div>
        <div class="right-bar">
          <p>
            <span>Toplam</span> <span>120 TL</span>
          </p>
          <hr />
          <p>
            <span>Vergi (5%)</span> <span>6 TL</span>
          </p>
          <hr />
          <p>
            <span>Kargo</span> <span>15 TL</span>
          </p>
          <hr />
          <p>
            <span>Son</span> <span>141 TL</span>
          </p>
          <a href="#">
            <i class="fa fa-shopping-cart"></i>Öde
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
