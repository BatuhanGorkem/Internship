import React from "react";
import "../scss/_productsInfo.scss";
const ProductsInfo = () => {
  return (
    <section id="productInfo">
      <div id="info">
        <h6>Anasayfa</h6>
        <i className="fa-solid fa-angle-right"></i>
        <h6>Beyaz Eşya</h6>
      </div>
      <div id="categoryinfo">
        <h4>
          <b>Beyaz Eşya</b> Kategorisi içeriğindeki ürünler listeleniliyor.
        </h4>
      </div>
      <div id="select">
        <select id="Sort">
          <option value="volvo">En son eklenenlere göre</option>
        </select>
        <select id="Filter">
          <option value="volvo">Tüm ürünler</option>
        </select>
      </div>
      {/* <div id="shape">
        <i class="fa-solid fa-grid-2"></i>
        <i class="fa-solid fa-chart-tree-map"></i>
      </div> */}
    </section>
  );
};

export default ProductsInfo;
