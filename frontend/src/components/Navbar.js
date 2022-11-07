import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import img from '../images/shoelando_logo.png';


export default function Navbar() {
  return (
    <>

      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={img} className="main-logo" alt="Shoelando logo" />
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <form>
                <input type="search" className="form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
              </form></li>
            <li class="nav-item">Account</li>
            <li class="nav-item">Cart</li>
          </ul>
        </header>
      </div>
    </>
  );
}

/*
https://www.flaticon.com/free-icon/user_1144760?related_id=1144760&origin=search
https://www.flaticon.com/free-icon/shopping-cart_3144456?term=cart&page=1&position=2&page=1&position=2&related_id=3144456&origin=style
*/