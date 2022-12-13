import React, { useState, useEffect, createRef } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import '../Order/Order.css';
import './Checkout.css';


export default function Checkout({ cart, emptyCart, removeFromCart, updateAmount, url }) {

  const [inputs,] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [finished, setFinished] = useState(false);

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

  // POSTITUSKULUT LISÄTTY
  let finalsum = 1.90;

  function order(e) {
    e.preventDefault();

    const json = JSON.stringify({
      fname: firstname,
      lname: lastname,
      address: address,
      email: email,
      zip: zip,
      city: city,
      cart: cart,
    });
    axios.post(url + 'order/save.php', json, {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
      .then(() => {
        emptyCart();
        setFinished(true);
        console.log(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }
  if (finished === false) {
    return (

      <div className="container checkout-container mb-5">
        <div className="row">
          {cart.length > 0 &&
            <main>
              <div className="py-5">
                <h2 className='mb-4'>Tilauksen yhteenveto ja tilaus</h2>
              </div>
              <div className="col">
                <h3 className='font' style={{ paddingLeft: "1rem" }}>Tuotteet</h3>
                {cart.map((product, index) => {
                  sum += parseFloat(product.price * product.amount);
                  finalsum += parseFloat(product.price * product.amount);
                  return (
                    <>
                      <div>
                        <form className="cart-form" key={uuid()} >

                          <div className="form-item cart-form-img">
                            <img
                              style={{ width: '50%' }} />
                          </div>

                          <div className='form-item rcol'>
                            brändi
                          </div>

                          <div className="form-item lcol">
                            <input type="number" className="amount"
                              ref={inputs[index]}
                              value={product.amount}
                              onChange={e => changeAmount(e, product, index)} />
                          </div>

                          <div className="form-item rcol">{product.productname}
                          </div>

                          <a href="#" className="form-item rcol" style={{ fontSize: "small", color: "gray" }} onClick={() => removeFromCart(product)}>
                            <ion-icon name="trash-outline"></ion-icon>
                            &nbsp;Poista tuote
                          </a>

                          <div className="form-item lcol">
                            {product.price} €
                          </div>

                          <hr style={{ maxWidth: "50%" }} />

                        </form>
                      </div>
                    </>
                  )
                })}

                {/* TYHJENNÄ OSTOSKORI */}

                <button type="button" className="btn empty-cart-btn d-flex mb-4" onClick={() => emptyCart()}>Tyhjennä ostoskori</button>

                {/* KOKONAISSUMMA */}

                <div className="col sum-col mt-5">
                  <h3 className='font'>Kokonaissumma</h3>
                  <div className='justify-content-left mt-4'>
                    <div className="checkout" key={uuid()}>

                      <div className='mb-3'>Välisumma</div>
                      <div className='cart-price'>{sum.toLocaleString(navigator.language, { minimumFractionDigits: 2 })} €</div>
                      <div className='mb-3'>Toimituskulut</div>
                      <div className='cart-price'>1,90 €</div>
                      <div className='mb-3'>Kokonaissumma</div>
                      <div className='cart-price'>{finalsum.toLocaleString(navigator.language, { minimumFractionDigits: 2 })} €</div>

                    </div>
                  </div>

                </div>
              </div>

              {/* BILLING INFORMATION */}


              <div className="col-md-auto">
                <h4 className="mb-3 mt-5">Postitusosoite</h4>

                <form className="checkout-form" onSubmit={order} >
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label for="firstName" className="form-label">Etunimi</label>
                      <input type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Etunimi"
                        pattern='^[a-zA-Zä-öÄ-Ö-_ ]+$'
                        autoComplete="off"
                        onChange={e => setFirstname(e.target.value)} required />
                      <div className="invalid-feedback">
                        Tarkista oikeinkirjoitus
                      </div>
                    </div>

                    <div className="col-sm-6">

                      <label for="lastName" className="form-label">Sukunimi</label>
                      <input type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Sukunimi"
                        pattern='^[a-zA-Zä-öÄ-Ö-_ ]+$'
                        autoComplete="off"
                        onChange={e => setLastname(e.target.value)} required />

                      <div className="invalid-feedback">
                        Tarkista oikeinkirjoitus
                      </div>

                    </div>

                    <div className="col-12">
                      <label for="email" className="form-label">Sähköposti</label>
                      <input type="email"
                        className="form-control"
                        id="email"
                        placeholder="nimi@example.com"
                        pattern="[a-zA-Zä-öÄ-Ö0-9._%+-]+@[a-z0-9.-]+\.[a-z].{2,}$"
                        autoComplete="off"
                        onChange={e => setEmail(e.target.value)} />
                      <div className="invalid-feedback">
                        Syötä kelvollinen sähköpostiosoite toimituspäivityksiä varten
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="address" className="form-label">Osoite</label>
                      <input type="text"
                        className="form-control"
                        id="address"
                        placeholder="Osoite"
                        pattern='^[a-zA-Zä-öÄ-Ö-0-9_ ]+$'
                        autoComplete="off"
                        onChange={e => setAddress(e.target.value)} required />
                      <div className="invalid-feedback">
                        Syötä kelvollinen toimitusosoite
                      </div>
                    </div>

                    <div className="col-md-5">
                      <label for="country" className="form-label">Kaupunki</label>
                      <input type="text"
                        className="form-control"
                        placeholder="Kaupunki"
                        pattern='^[a-zA-Zä-öÄ-Ö-_ ]+$'
                        autoComplete="off"
                        onChange={e => setCity(e.target.value)} required />
                      <div className="invalid-feedback">
                        Valitse kelvollinen kaupunki
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label for="state" className="form-label">Postinumero</label>
                      <input type="text"
                        className="form-control"
                        placeholder="Postinumero"
                        pattern="[0-9]{1,5}"
                        autoComplete="off"
                        onChange={e => setZip(e.target.value)} required />
                      <div className="invalid-feedback">
                        Postinumero vaaditaan
                      </div>
                    </div>
                  </div>

                  <h4 className="mb-3 mt-5">Maksutapa</h4>

                  <div className="my-3">
                    <div className="form-check">
                      <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required />
                      <label className="form-check-label" for="credit">Luottokortti</label>
                    </div>

                    <div className="form-check">
                      <input id="debit"
                        name="paymentMethod"
                        type="radio" className="form-check-input" required />
                      <label className="form-check-label" for="debit">Pankkikortti</label>
                    </div>

                    <div className="form-check">
                      <input id="paypal"
                        name="paymentMethod"
                        type="radio" className="form-check-input" required />
                      <label className="form-check-label" for="paypal">PayPal</label>
                    </div>
                  </div>

                  <button className="submit-btn w-100 btn btn-primary btn-lg mt-3" type="submit">Tilaa</button>

                </form>
              </div>
            </main>
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className="container col-md-7 col-lg-8">
        <div className="alert alert-success text-center" role="alert"> Tilaus onnistui </div>
      </div>
    )
  }
}
