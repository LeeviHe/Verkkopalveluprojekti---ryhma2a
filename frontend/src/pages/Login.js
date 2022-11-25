import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <>
      <div className='container login-grid'>

        <div className='register mt-4 mb-4'>
          <h4 className='register-heading mb-4'>
            Uusi käyttäjä
          </h4>

          <form name='myForm' id='myForm' className='login-form' method="post">

            <div>
              <label for="full-name">Koko nimi<span style={{ color: 'red' }}>*</span></label>
              <br />
              <input id='full-name' name='full-name' type="text" minlength="3" placeholder="Koko nimi" autocomplete="off" required />
              <p id="name-field"></p>
            </div>

            <div>
              <label for="email">Sähköposti<span style={{ color: 'red' }}>*</span></label>
              <br />
              <input id="email" type="email" placeholder="nimi@example.com" required />
              <p id="email-field"></p>
            </div>

            <div>
              <label for="password">Salasana<span style={{ color: 'red' }}>*</span></label>
              <br />
              <input id="password" type="password" minlength="8" placeholder="salasana" autocomplete="off" required />
              <p id="password-field"></p>
            </div>

            <button className='register-btn btn btn-primary mb-3 mt-3'><span>Rekisteröi </span></button>

            <p><span style={{ color: 'red' }}>* Pakolliset kentät</span></p>
            <p style={{ fontStyle: "italic", color: "gray" }}> Reskisteröimällä käyttäjätilin hyväksyt <a href="under-construction.html ">yleiset käyttöehdot</a>.</p>
            <p> Lue <a href="under-construction.html ">yksityisyydestämme</a>.</p>
          </form>
        </div>

        <div className='login mt-4 mb-4'>
          <h4 className='login-heading mb-4'>
            Kirjaudu sisään
          </h4>

          <form className='login-form'>

            <div>
              <label for="email">Sähköposti<span style={{ color: 'red' }}>*</span></label>
              <br />
              <input id="email" type="email" placeholder="nimi@example.com" required />
              <p id="email-field"></p>
            </div>

            <div>
              <label for="password">Salasana<span style={{ color: 'red' }}>*</span></label>
              <br />
              <input id="password" type="password" minlength="8" placeholder="salasana" autocomplete="off" required />
              <p id="password-field"></p>
            </div>

            <button className='login-btn btn btn-primary mb-3 mt-3'><span>Kirjaudu sisään </span></button>

            <p><span style={{ color: 'red' }}>* Pakolliset kentät</span></p>
            <p className='forgotten-password'><a href='#'>Unohditko salasanasi?</a></p>

          </form>
        </div>
      </div >
    </>
  )
}