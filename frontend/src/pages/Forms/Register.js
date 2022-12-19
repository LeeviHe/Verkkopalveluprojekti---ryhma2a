import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Forms.css';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Register({ url, setLoggedUser }) {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  /** TOGGLE PASSWORD VISIBILITY */
  const [showPassw, setShowPassw] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const togglePassw = (e) => {
    e.preventDefault();
    setShowPassw(!showPassw);
    setIsActive(current => !current);
  };

  const ToastRegister = () => {
    toast.success('Kiitos rekisteröinnistä! Sinut on automaattisesti kirjattu sisään.', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  function Register(e) {
    e.preventDefault()
    const json = { fname, lname, email, password }
    axios.post(url + "credentials/register.php", json, { withCredentials: true })
      .then(resp => setLoggedUser(resp.data) & navigate('/') & ToastRegister())
      .catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
  }

  return (
    <>
      <div className="container form-container">
        <div className="row form-row">
          <h2 className='h2-title text-center mt-5
           mb-4'>Olen uusi asiakas</h2>

          {/* REKISTERÖINTI */}

          <div className="col form-col mt-4 mb-5 text-center">

            <form name='regForm' id='regForm' onSubmit={Register}>
              <h4 className='register-heading mb-4'>
                Luo uusi tili
              </h4>

              <div>
                <br />
                <input className='form-input register'
                  id='first-name'
                  name='first-name'
                  type="text"
                  pattern='^[a-zA-Zä-öÄ-Ö-_ ]+$'
                  onChange={e => setFname(e.target.value)}
                  minlength="3"
                  placeholder="Etunimi"
                  autoComplete="off"
                  required />
                <span className='error-msg' style={{ fontSize: 'small', color: 'red' }}>
                  Nimen täytyy olla vähintään 3 merkkiä pitkä. Nimissä ei saa esiintyä numeroita tai erikoismerkkejä.
                </span>

                <p id="fname-field"></p>
              </div>

              <div>
                <br />
                <input className='form-input register'
                  id='last-name'
                  name='last-name'
                  type="text"
                  pattern='^[a-zA-Zä-öÄ-Ö-_ ]+$'
                  onChange={e => setLname(e.target.value)}
                  minlength="3"
                  placeholder="Sukunimi"
                  autoComplete="off"
                  required />

                <span className='error-msg' style={{ fontSize: 'small', color: 'red' }}>
                  Nimen täytyy olla vähintään 3 merkkiä pitkä. Nimissä ei saa esiintyä numeroita tai erikoismerkkejä.
                </span>

                <p id="lname-field"></p>
              </div>

              <div>
                <br />
                <input className='form-input register'
                  id="email"
                  type="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z].{2,}$"
                  onChange={e => setEmail(e.target.value)} placeholder="nimi@example.com" autoComplete='off'
                  required />

                <span className='error-msg' style={{ fontSize: 'small', color: 'red' }}>
                  Tarkista oikeinkirjoitus.<br />
                  Sähköpostissa täytyy olla @-merkki ja sen täytyy loppua .com/fi yms.
                </span>

                <p id="email-field"></p>
              </div>

              <br />

              <div className='input-container'>

                <button className={isActive ? 'hidden' : 'passw-btn'} onClick={togglePassw}><ion-icon name="eye-off-outline"></ion-icon></button>

                <button className={isActive ? 'passw-btn' : 'hidden'} onClick={togglePassw}><ion-icon name="eye-outline"></ion-icon></button>

                <input className='form-input register'
                  id="password"
                  name='password'
                  type={showPassw ? "text" : "password"}
                  pattern="^(?=.*?[A-ZÄ-Ö])(?=.*?[a-zä-ö])(?=.*?[0-9])(?=.*?[#!@$%^&*?/\.€{}´`~()+=])\S{8,30}$"
                  onChange={e => setPassword(e.target.value)}
                  minlength="8"
                  title='disabled'
                  placeholder="Salasana"
                  autoComplete="off"
                  required
                />

                <span className='error-msg' style={{ fontSize: 'small', color: 'red' }}>
                  Salasanan tulee olla vähintään 8 merkkiä pitkä ja sisältää vähintään yksi iso ja pieni kirjain, yksi numero ja yksi erikoismerkki. Välilyöntejä ei sallita.
                </span>

                <div className='checkbox'>
                  <input id='checkbox' type="checkbox" />
                  <label style={{
                    color: "black"
                  }}
                    for="checkbox">
                    Kyllä, haluan vastaanottaa ajankohtaisia mainoksia ja tiedotuksia Shoelandolta sähköpostiini.
                  </label>
                </div>

                <p id="password-field"></p>
              </div>
              <button type="submit" className='form-btn btn btn-primary mb-4 mt-4'><span>Rekisteröi </span></button>
            </form>


            <p style={{ fontStyle: "italic", color: "gray" }}> Reskisteröimällä käyttäjätilin hyväksyt <Link to="*">yleiset käyttöehdot</Link>.</p>
            <p> Lue <Link to="*">yksityisyydestämme</Link>.</p>

          </div>

        </div>
      </div>
    </>
  )
}
