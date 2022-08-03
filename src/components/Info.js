import React from "react";
import "../scss/_ınfo.scss";
const Info = () => {
  return (
    <div id="container">
      <div className="list" id="Kurumsal">
        <ul>
          <li className="bold">Kurumsal</li>
          <li>Hakkımızda</li>
          <li>Kampanyalar</li>
          <li>Banka Hesap Numaraları</li>
          <li>Blog</li>
          <li>Haberler</li>
        </ul>
      </div>
      <div className="list" id="MusteriHizmetleri">
        <ul>
          <li className="bold">Müşteri Hizmetleri</li>
          <li>Sipariş Sorgulama</li>
          <li>Teslimat ve Kargo</li>
          <li>İade ve Değişim</li>
          <li>Üyelik Sözleşmesi</li>
          <li>Gizlilik ve Güvenlik</li>
        </ul>
      </div>
      <div className="list" id="Yardım">
        <ul>
          <li className="bold">Yardım</li>
          <li>İletişim Bilgileri</li>
          <li>Sıkça Sorulan Sorular</li>
        </ul>
      </div>
      <div className="list" id="İletisim">
        <ul>
          <li className="bold">İletişim</li>
          <li>Adres:1378 Sok No1/43</li>
          <li>Telefon: 0850555555</li>
        </ul>
      </div>
      <div className="list" id="Social">
        <h5 className="bold">Bizi takip edin</h5>
        <div id="icons">
          {" "}
          <a href="/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div>
          <p>
            {" "}
            <p>E-Bültene abone olun,gelişmeleri kaçırmayın</p>
          </p>
        </div>
        <div class="search_wrap search_wrap_1">
          <div class="search_box">
            <input type="text" class="input" placeholder="E-posta Adresiniz" />
            <div class="btn btn_common">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
