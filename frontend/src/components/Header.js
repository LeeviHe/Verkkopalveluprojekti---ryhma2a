import React from "react";
import './Header.css';
import img from '../images/logos/shoelando_logo.png';


export default function Header() {
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

            <li className="nav-item me-2"><img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="nav-icon"></img></li>

            <li className="nav-item me-2 dropdown">
              <a className="nav-link dropdown-toggle" href="/shoppingcart" id="headerDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                      <button className="form-btn">Siirry kassalle</button>
                    </div>
                  </form>
                </div>
              </div>
            </li>
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