import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link } from "react-router-dom";

const URL = 'http://localhost:3000/backend/'

export default function Login() {

  const [logemail, setLogemail] = useState("")
  const [logpassword, setLogpassword] = useState("")
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    axios.post(URL + "products/login.php", {}, { withCredentials: true })
      .then(resp => setLoggedUser(resp.data))
      .catch(e => console.log(e.message))
  }, [])


  function LogInre() {
    const formData = new FormData();
    formData.append("logemail", logemail);
    formData.append("logpassword", logpassword);

    axios.post(URL + "products/login.php", formData)
      .then(resp => setLoggedUser(resp.data))
      .catch(e => console.log(e.message))
  }

  function logout() {
    axios.get(URL + "products/logout.php", { withCredentials: true })
      .then(resp => setLoggedUser(null))
      .catch(e => console.log(e.messahe))
  }

  return (
    <>
      <div class="container">
        <div class="row form-row">
          <h2 className='login-title text-center mb-4'>Kirjautuneena käyttäjänä saat käyttöösi henkilökohtaiset suositukset, hintavahdin ja paljon muita etuja</h2>

          {/* KIRJAUTUMINEN */}

          <div class="col form-col login">

            <form className='login-form'>
              <h4 className='login-heading mb-4'>
                Kirjaudu sisään
              </h4>

              <div>
                <label for="email">Sähköposti<span style={{ color: 'red' }}>*</span></label>
                <br />
                <input id="email" type="email" value={logemail} onChange={e => setLogemail(e.target.value)} placeholder="nimi@example.com" required />
                <p id="email-field"></p>
              </div>

              <div>
                <label for="password">Salasana<span style={{ color: 'red' }}>*</span></label>
                <br />
                <input id="password" type="password" value={logpassword} onChange={e => setLogpassword(e.target.value)} minlength="8" placeholder="salasana" autocomplete="off" required />
                <p id="password-field"></p>
              </div>


              <p><span style={{ color: 'red' }}>* Pakolliset kentät</span></p>
              <p className='forgotten-password'><a href='#'>Unohditko salasanasi?</a></p>

            </form><button type="submit" className='login-btn btn btn-primary mb-3 mt-3' onClick={LogInre}><span>Kirjaudu sisään </span></button>

            <div>
              <Link to={"/register"} style={{ fontSize: 'small' }}>Uusi käyttäjä? Rekisteröidy tästä</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
