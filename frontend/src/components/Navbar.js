import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import img from '../images/shoelando_logo.png';


export default function Navbar() {
  return (
    <>

      <div className="container navbar-container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={img} className="main-logo" alt="Shoelando logo" />
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <form>
                <input type="search" classNameName="form-control-dark text-bg-dark me-2" placeholder="Search..." aria-label="Search"></input>
                <button className="nav-item"><img src = "https://cdn-icons-png.flaticon.com/512/149/149852.png"></img></button>
              </form>
            </li>

            <li className="nav-item me-2">Account</li>
            <li className="nav-item me-2">Cart</li>
          </ul>
        </header>
      </div>
    </>
  );
}


/*search
https://www.flaticon.com/free-icon/search_149852?term=search&page=1&position=2&page=1&position=2&related_id=149852&origin=search

account
https://www.flaticon.com/free-icon/user_1144760?related_id=1144760&origin=search

cart
https://www.flaticon.com/free-icon/shopping-cart_3144456?term=cart&page=1&position=2&page=1&position=2&related_id=3144456&origin=style*/
