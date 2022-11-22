import React from "react";
import './Shoppingcart.css';
import { Link } from 'react-router-dom';

export default function Cart({cart}) {
  return (
    <>
      <li className="nav-item me-2"><img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="nav-icon"></img></li>

      <li className="nav-item me-2 dropdown">

        <a className="nav-link dropdown-toggle" href="/shoppingcart" id="headerDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span style={{ color: '#fff' }}>{cart.length}</span>
          <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" className="nav-icon"></img>
        </a>
        <div class="dropdown-menu" aria-labelledby="headerDropdownMenuLink">
          <div className="container cart-container">

            <strong className="d-flex  py-3">Ostoskorissa on x määrä tuotteita</strong>

            <form className="cart-form">
              <div className="a">

                <div className="b c">tuotekuva</div>
                <div className="b c">tuote</div>

                <label for="maara" style={{ padding: "0.3rem" }}>Määrä</label>
                <select id="maara" name="maara" className="b">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="form-links a">
                <a className="asd">tyhjennä ostoskori</a>
              </div>

              <div className="d">
                <div>Summa</div>
                <div>Toimituskulut</div>
                <div>Summa EUR</div>
              </div>

              <div className="d-flex justify-content-center py-3">
                <Link to="/order">
                  <button className="form-btn">Siirry tilaamaan</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </li>

    </>
  );
}

/**<div class="collapse navbar-collapse" id="navbarNavDropdown">

        <ul class="navbar-nav mx-auto">

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <ul>
                <strong><ion-icon name="heart-outline"></ion-icon> Most wanted</strong>
                <li>
                  <a class="dropdown-item" href="pages/under-construction.html">Pyjamas</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Leashes</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Lily collection</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Activity toys</a>
                </li>
              </ul>
              <ul> <strong><ion-icon name="home-outline"></ion-icon> Indoors</strong>
                <li>
                  <a class="dropdown-item" href="pages/under-construction.html">Ribbons</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Bowties</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Bandanas</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Hats</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Toys</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Shirts</a>
                </li>
              </ul>
              <ul> <strong><ion-icon name="sunny-outline"></ion-icon> Outdoors</strong>
                <li>
                  <a class="dropdown-item" href="pages/under-construction.html">Collars</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Harnesses</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Jackets/Coats</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Shoes</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Paw wax</a>
                  <a class="dropdown-item" href="pages/under-construction.html">Reflectors</a>
                </li>
              </ul>

              <div>
                <img class="dropdown-img" src="images/dropdown_img.jpg" alt="Fluffy dog wearing a striped t-shirt" width="200px" />
              </div>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="pages/about.html">About</a>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="pages/log-in.html">Log In</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="pages/under-construction.html">
              <ion-icon name="cart-outline"></ion-icon> Cart</a>
          </li>
        </ul>
      </div> */