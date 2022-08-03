import React from "react";
import "../scss/_header.scss";

const Header = () => {
  return (
    <header>
      <div id="icons">
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

      <div className="YB">
        <button id="yardım">Yardım</button>
        <button id="blog">Blog</button>
      </div>
    </header>
  );
};

export default Header;
