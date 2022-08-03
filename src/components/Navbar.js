import React from "react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../scss/_navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className="navbar">
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={closeMenu}>
            Beyaz Eşya
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link" onClick={closeMenu}>
            Ayakkabı
          </a>
        </li>
        <li className="nav-item">
          <a href="/shop" className="nav-link" onClick={closeMenu}>
            Televizyonlar & Ses Sistemleri
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link" onClick={closeMenu}>
            Ev Eşyaları
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link" onClick={closeMenu}>
            Kişisel Bakım
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link" onClick={closeMenu}>
            Mutfak Gereçleri
          </a>
        </li>
      </ul>
    </nav>
    // <nav>
    //   <ul id="navbarul" className="topnav">
    //     <li className="items">Beyaz Eşya</li>
    //     <li className="items">Ayakkabı</li>
    //     <li className="items">Televizyonlar & Ses Sistemleri</li>
    //     <li className="items">Ev Eşyaları</li>
    //     <li className="items"> Kişisel Bakım</li>
    //     <li className="items">Mutfak Gereçleri</li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
