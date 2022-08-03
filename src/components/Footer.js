import React from "react";
import "../scss/_footer.scss";
import img from "../img/229324.png";
const Footer = () => {
  return (
    <footer id="footer">
      <p>Copyright &copy; 2022 Karma-Kırmızı</p>
      <div id="img">
        <img src={img} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
