import React, { useState, useEffect, createRef } from "react";
import './Shoppingcart.css';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


export default function Cart({ cart, removeFromCart, updateAmount }) {

  const [inputs, _] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      inputs[i] = createRef();
    }
  }, [cart.length])

  useEffect(() => {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  }, [cart])


  function changeAmount(e, product, index) {
    updateAmount(e.target.value, product);
    setInputIndex(index);
  }
  let sum = 0;

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
            <strong className="d-flex  py-3">Ostoskori</strong> <br />
            {cart.map((product, index) => {
              sum += parseFloat(product.price * product.amount);
              return (

                <form className="cart-form" key={uuid()}>

                  <div className="a">

                    <div className="b c">tuotekuva</div>
                    <div className="b c">{product.productname}</div>
                    <div className="formitem">Määrä
                      <input type="number" className="amount" ref={inputs[index]} value={product.amount} onChange={e => changeAmount(e, product, index)} /></div>
                    <div className="formitem">{product.price} kpl</div>
                  </div>
                  <div className="form-links a">
                    <a className="asd" onClick={() => removeFromCart(product)}>Poista tuote</a>
                  </div>
                </form>
              )
            })}
            <div className="d-flex justify-content-center py-3">
              <div>Summa yhteensä</div>
              <div>{sum.toFixed(2)} €</div>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link to="/order">
                <button className="form-btn">Siirry tilaamaan</button>
              </Link>
            </div>
          </div>
        </div>
      </li>

    </>
  );
}