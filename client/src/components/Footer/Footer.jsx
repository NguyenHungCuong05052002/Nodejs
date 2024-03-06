import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-orange">
      <div className="container py-4 ">
        <div className="col text text-white fw-3 fs-14">
          <div className="row">
            <Link to="/" className="text-uppercase">
              <ul>
                <span className="text-sub">SHOP</span>
                <li>Smartphones</li>
                <li>Home Decoration</li>
                <li>Womens Dresser</li>
              </ul>
            </Link>
          </div>

          <div className="row">
            <Link to="/" className="text-uppercase">
              <ul>
                <span className="text-sub">LIÊN HỆ CHÚNG TÔI</span>
                <li>Email: abc@gmail.com</li>
                <li>SĐT: +84 123456789</li>
                <li>Địa chỉ : HCM</li>
              </ul>
            </Link>
          </div>

          <div className="row">
            <Link to="/" className="text-uppercase">
              <ul>
                <span className="text-sub">CHÍNH SÁCH</span>
                <li>Chính sách bảo mật</li>
                <li>Quy chế hoạt động </li>
                <li>Chính sách phát triển</li>
              </ul>
            </Link>
          </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
