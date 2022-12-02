import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Forms.css';
import { Link } from "react-router-dom";

const URL = 'http://localhost:3000/backend/'

export default function Register() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  /** TOGGLE PASSWORD VISIBILITY */
  const [showPassw, setShowPassw] = useState(false);

  const togglePassw = (e) => {
    e.preventDefault();
    setShowPassw(!showPassw);
  }

  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    axios.post(URL + "products/login.php", {}, { withCredentials: true })
      .then(resp => setLoggedUser(resp.data))
      .catch(e => console.log(e.message))
  }, [])

  function Register() {
    const json = { fname, lname, email, password }
    axios.post(URL + "products/register.php", json, { withCredentials: true })
      .catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
  }

  function logout() {
    axios.get(URL + "products/logout.php", { withCredentials: true })
      .then(resp => setLoggedUser(null))
      .catch(e => console.log(e.messahe))
  }

  return (
    <>
      <div className="container form-container">
        <div className="row form-row">
          <h2 className='h2-title text-center mt-5
           mb-4'>Olen uusi asiakas</h2>

          {/* REKISTERÖINTI */}

          <div className="col form-col mt-4 mb-5 text-center">

            <form noValidate name='regForm' id='regForm'>
              <h4 className='register-heading mb-4'>
                Luo uusi tili
              </h4>

              <div>
                <br />
                <input className='form-input register'
                  id='first-name'
                  name='first-name'
                  type="text"
                  pattern='[a-zA-Zä-öÄ-Ö]+'
                  onChange={e => setFname(e.target.value)}
                  minlength="3"
                  placeholder="Etunimi"
                  autoComplete="off"
                  required />
                <span className='error-msg' style={{ fontSize: 'small', color: 'red' }}>
                  Nimissä ei saa esiintyä numeroita tai erikoismerkkejä.
                </span>

                <p id="fname-field"></p>
              </div>

              <div>
                <br />
                <input className='form-input register'
                  id='last-name'
                  name='last-name'
                  type="text"
                  pattern='[a-zA-Zä-öÄ-Ö]+'
                  onChange={e => setLname(e.target.value)}
                  minlength="3"
                  placeholder="Sukunimi"
                  autoComplete="off"
                  required />

                <span className='error-msg' style={{ fontSize: 'small', color: 'red' }}>
                  Nimissä ei saa esiintyä numeroita tai erikoismerkkejä.
                </span>

                <p id="lname-field"></p>
              </div>

              <div>
                <br />
                <input className='form-input register'
                  id="email"
                  type="email"
                  onChange={e => setEmail(e.target.value)} placeholder="nimi@example.com" autoComplete='off'
                  required />

                <span className='error-msg' style={{ fontSize: 'small', color: 'red' }}>
                  Tarkista oikeinkirjoitus.<br />
                  Sähköpostissa täytyy olla @-merkki.
                </span>

                <p id="email-field"></p>
              </div>

              <br />
              <div className='input-container'>
                <input className='form-input register'
                  id="password"
                  name='password'
                  type={showPassw ? "text" : "password"}
                  pattern="^(?=.*?[A-ZÄ-Ö])(?=.*?[a-zä-ö])(?=.*?[0-9])(?=.*?[#!@$%^&*?/\.€{}´`~()+=])\S{8,20}$"
                  onChange={e => setPassword(e.target.value)}
                  minlength="8"
                  title='disabled'
                  placeholder="Salasana"
                  autoComplete="off"
                  required
                />

                <button className='passw-btn' onClick={togglePassw}><ion-icon name="eye-off-outline"></ion-icon></button>

                <p id="password-field"></p>
              </div>

              <span className='error-msg' style={{ fontSize: 'small', color: 'red' }}>
                Salasanan tulee olla vähintään 8 merkkiä pitkä ja sisältää vähintään yksi iso ja pieni kirjain, yksi numero ja yksi erikoismerkki. Välilyöntejä ei sallita.
              </span>

            </form>

            <Link to="/"><button type="submit" className='form-btn btn btn-primary mb-4 mt-4' onClick={Register}><span>Rekisteröi </span></button></Link>

            <p style={{ fontStyle: "italic", color: "gray" }}> Reskisteröimällä käyttäjätilin hyväksyt <a href="under-construction.html ">yleiset käyttöehdot</a>.</p>
            <p> Lue <a href="under-construction.html ">yksityisyydestämme</a>.</p>

          </div>

        </div>
      </div>
    </>
  )
}