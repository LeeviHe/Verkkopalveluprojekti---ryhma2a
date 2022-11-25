import React from "react";
import './Header.css';
import img from '../images/logos/shoelando_logo.png';
import Cart from './Cart.js';

export default function Header({cart}) {
  return (
    <>

      <div className="container-fluid header-container justify-content-center">
        <header className="d-flex flex-wrap py-3">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={img} className="main-logo" alt="Shoelando logo" />
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <form>
                <input type="search" className="form-control-dark me-2" placeholder="Etsi..." aria-label="Search"></input>
                <button className="nav-item"><img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" className="nav-icon search-icon"></img></button>
              </form>
            </li>

              <>
                <Cart cart={cart}/>
              </>

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
https://cdn-icons-png.flaticon.com/512/3144/3144456.png

<a href="https://www.freepik.com/free-photo/pastel-acrylic-abstract-background-vector_15559399.htm#query=simple%20background&position=43&from_view=keyword">Image by rawpixel.com</a> on Freepik*/