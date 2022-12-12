import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './Header.css';
import img from '../../images/logos/shoelando_logo.png';
import Cart from '../Shoppingcart/Shoppingcart.js';


export default function Header({loggedUser, setLoggedUser, url, cart, emptyCart, removeFromCart, updateAmount }) {




  function logout() {
    axios.get(url + "products/logout.php", { withCredentials: true })
      .then(resp => setLoggedUser(null))
      .catch(e => console.log(e.message))
  }
  return (
    <>



      <div className="container-fluid header-container justify-content-center">
        <header className="d-flex flex-wrap py-3">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={img} className="main-logo" alt="Shoelando logo" />
          </Link>

          <ul className="nav nav-pills">

            {/**leevin testailu */}

            {loggedUser ? <h1>Olet kirjautunut</h1> : <h1>Et ole kirjautunut</h1>}
            {loggedUser ? <button type="submit" className='login-btn btn btn-primary mb-3 mt-3' onClick={logout}><span>logout </span></button> : <span></span>}

            <li className="nav-item">
              <form>
                <input type="search" className="form-control-dark me-2" placeholder="Etsi..." aria-label="Search"></input>

                <button className="nav-item">
                  <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" className="nav-icon search-icon"></img>
                </button>

                <button className="nav-item">
                  <Link to="/login">
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="nav-icon"></img>
                  </Link>
                </button>

              </form>
            </li>

            <>
              <Cart cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart}/>
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