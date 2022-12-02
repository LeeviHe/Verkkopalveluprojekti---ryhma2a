import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Forms.css';
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
      <div className="container form-container">
        <div className="row form-row">
          <h2 className='h2-title text-center mt-5
           mb-4'>Tervetuloa takaisin!</h2>

          {/* KIRJAUTUMINEN */}

          <div className="col form-col mt-4 mb-5 text-center">

            <form name='logForm' id='logForm'>
              <h4 className='login-heading mb-4'>
                Kirjaudu sisään
              </h4>

              <div>
                <br />
                <input className='form-input' id="email" type="email" value={logemail} onChange={e => setLogemail(e.target.value)} placeholder="Sähköposti" autoComplete='off' required />
                <p id="email-field"></p>
              </div>

              <div>
                <br />
                <input className='form-input' id="password" type="password" value={logpassword} onChange={e => setLogpassword(e.target.value)} minlength="8" placeholder="Salasana" autoComplete="off" required />
                <p id="password-field"></p>
              </div>

              <button type="submit" className='form-btn btn btn-primary mb-4 mt-4' onClick={LogInre}><span>Kirjaudu sisään </span></button>


              <div>
                <Link to={"/register"} style={{ fontSize: 'small' }}><span style={{ fontWeight: 'bold' }}>Uusi käyttäjä?</span> Rekisteröidy tästä</Link>
                <p className='forgotten-password'><a href='#'>Unohditko salasanasi?</a></p>
              </div>
            </form>

          </div>


        </div>
      </div>
    </>
  )
}
