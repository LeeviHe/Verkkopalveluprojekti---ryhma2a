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
      <a className="cart-link" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span className="item-counter" style={{ color: '#fff' }}>{cart.length}</span>
        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" className="nav-icon"></img>
      </a>

      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header d-flex py-3 justify-content-between align-items-center">
          <h5 className="cart-title" id="offcanvasRightLabel">Ostoskori</h5>

          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">

          <div>
            {cart.map((product, index) => {
              sum += parseFloat(product.price * product.amount);
              return (
                <div className="container">

                  <form className="cart-form2 text-justify" key={uuid()}>

                    <div className="cart-pic d-flex justify-content-center">
                      <img
                        style={{ width: '100%', marginRight: '10px' }} />
                    </div>

                    <div className="help-container">

                      <div style={{ fontSize: "small", color: "darkslategray" }}>
                        brändi
                      </div>

                      <div className="cart-pname" style={{ fontSize: "small", color: "darkslategray" }}>
                        {product.productname}
                      </div>

                      <div className="cart-amount" style={{ fontSize: "small", color: "darkslategray" }}>Määrä &nbsp;

                        <input className="text-center"
                          type="number"
                          ref={inputs[index]}
                          value={product.amount}
                          onChange={e => changeAmount(e, product, index)}
                          style={{ fontSize: "small", color: "darkslategray" }}>
                        </input>

                        <a className="cart-remove-btn d-flex align-items-center" style={{ fontSize: "small", color: "darkslategray" }} onClick={() => removeFromCart(product)}>
                          <ion-icon name="trash-outline" />
                        </a>
                      </div>

                    </div>

                    <div className="cart-price2 text-center">
                      {product.price} €
                    </div>

                  </form>
                </div>
              )
            })}

            <div className="d-flex justify-content-center py-3">
              <div>Summa yhteensä &nbsp;</div>
              <div>{sum.toFixed(2)} €</div>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link to="/order">
                <button className="cart-btn">Siirry tilaamaan</button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/*<li className="nav-item me-2 dropdown">

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
          </li>*/}

    </>
  );
}