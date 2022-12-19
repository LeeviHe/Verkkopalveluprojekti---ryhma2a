import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Forms.css';
import { Link, useNavigate } from "react-router-dom";

export function Login({ url , setLoggedUser }) {

  const [logemail, setLogemail] = useState("")
  const [logpassword, setLogpassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const navigate = useNavigate();

  function LogIn() {
    const formData = new FormData();
    formData.append("logemail", logemail);
    formData.append("logpassword", logpassword);

    axios.post(url + "credentials/login.php", formData, { withCredentials: true })
      .then(response => setLoggedUser(response.data))//Navigate jonnekkin
      .catch(e => setErrorMsg(e.response.data))
      
  }
  return (
    <>
      <div className="container form-container">
        <div className="row form-row">
          <h2 className='h2-title text-center mt-5
           mb-4'>Tervetuloa takaisin!</h2>

          {/* KIRJAUTUMINEN */}

          <div className="col form-col mt-4 mb-5 text-center">

            <form name='logForm' id='logForm' onSubmit={LogIn}>
              <h4 className='login-heading mb-4'>
                Kirjaudu sisään
              </h4>

              <div>
                <br />
                <input className='form-input'
                  id="email"
                  value={logemail}
                  onChange={e => setLogemail(e.target.value)}
                  placeholder="Sähköposti"
                  autoComplete='off'
                  />
                <p id="email-field"></p>
              </div>

              <div>
                <br />
                <input className='form-input' id="password" type="password" value={logpassword} onChange={e => setLogpassword(e.target.value)} placeholder="Salasana" autoComplete="off"/>
                <p id="password-field"></p>
              </div>

              <div>
                <Link to={"/register"} style={{ fontSize: 'small' }}><span style={{ fontWeight: 'bold' }}>Uusi käyttäjä?</span> Rekisteröidy tästä</Link>
                <p className='forgotten-password'>
                  <Link to="*">Unohditko salasanasi?</Link>
                </p>
              </div>
              <button type="submit" className='form-btn btn btn-primary mb-4 mt-4'>Kirjaudu sisään </button>
              <span style={{ color: 'red' }}>{errorMsg}</span>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}