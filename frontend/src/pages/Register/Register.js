import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Register.css';

const URL = 'http://localhost:3000/backend/'

export default function Register() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
      <div class="container">
        <div class="row form-row">
          <h2 className='login-title text-center mb-4'>Luomalla käyttäjän pääset käsiisi diipadaapa</h2>


          {/* REKISTERÖINTI */}

          <div class="col form-col register">

            <form name='myForm' id='myForm' className='login-form'>
              <h4 className='register-heading mb-4'>
                Uusi käyttäjä
              </h4>

              <div>
                <label for="first-name">Etunimi<span style={{ color: 'red' }}>*</span></label>
                <br />
                <input id='first-name' name='first-name' type="text" onChange={e => setFname(e.target.value)} minlength="3" placeholder="Etunimi" autocomplete="off" required />
                <p id="fname-field"></p>
              </div>

              <div>
                <label for="last-name">Sukunimi<span style={{ color: 'red' }}>*</span></label>
                <br />
                <input id='last-name' name='last-name' type="text" onChange={e => setLname(e.target.value)} minlength="3" placeholder="Sukunimi" autocomplete="off" required />
                <p id="lname-field"></p>
              </div>

              <div>
                <label for="email">Sähköposti<span style={{ color: 'red' }}>*</span></label>
                <br />
                <input id="email" type="email" onChange={e => setEmail(e.target.value)} placeholder="nimi@example.com" required />
                <p id="email-field"></p>
              </div>

              <div>
                <label for="password">Salasana<span style={{ color: 'red' }}>*</span></label>
                <br />
                <input id="password" type="password" onChange={e => setPassword(e.target.value)} minlength="8" placeholder="salasana" autocomplete="off" required />
                <p id="password-field"></p>
              </div>



              <p><span style={{ color: 'red' }}>* Pakolliset kentät</span></p>
              <p style={{ fontStyle: "italic", color: "gray" }}> Reskisteröimällä käyttäjätilin hyväksyt <a href="under-construction.html ">yleiset käyttöehdot</a>.</p>
              <p> Lue <a href="under-construction.html ">yksityisyydestämme</a>.</p>
            </form>
            <button type="submit" className='register-btn btn btn-primary mb-3 mt-3' onClick={Register}><span>Rekisteröi </span></button>
          </div>

        </div>
      </div>
    </>
  )
}