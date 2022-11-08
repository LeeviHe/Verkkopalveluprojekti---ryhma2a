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
                <input type="search" className="form-control-dark text-bg-dark me-2" placeholder="Search..." aria-label="Search"></input>
                <button className="nav-item"><img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" className="nav-image"></img></button>
              </form>
            </li>

            <li className="nav-item me-2"><img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="nav-image"></img></li>
            <li className="nav-item me-2"><img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" className="nav-image"></img></li>
          </ul>
        </header>
      </div>
    </>
  );
}


/*search
https://cdn-icons-png.flaticon.com/512/622/622669.png

account
https://cdn-icons-png.flaticon.com/512/1144/1144760.png

cart
https://cdn-icons-png.flaticon.com/512/3144/3144456.png*/
