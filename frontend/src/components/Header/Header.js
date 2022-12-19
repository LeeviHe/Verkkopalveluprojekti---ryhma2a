import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import img from '../../images/logos/shoelando_logo.png';
import Cart from '../Shoppingcart/Shoppingcart.js';


export default function Header({ names, loggedUser, setLoggedUser, url, cart, emptyCart, removeFromCart, updateAmount }) {

  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState([]);

  function logout() {
    axios.get(url + "credentials/logout.php", { withCredentials: true })
      .then(resp => setLoggedUser(null))
      .catch(e => console.log(e.message))
  }

  const navigate = useNavigate();

  useEffect(() => {
    console.log(url);
    axios.get(url + '/products/getcategories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
  }, [])

  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      navigate('/search/' + search);
    }
  }

  return (
    <>

      <div className="container-fluid header-container d-flex justify-content-center align-items-center">

        <header className="d-flex flex-wrap py-3">

          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src={img} className="main-logo" alt="Shoelando logo" />
          </Link>

          <ul className="nav nav-pills">

            <li className="nav-item">

              <form className='d-flex justify-content-center align-items-center'>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(e) => executeSearch(e)}
                  className="search_input form-control-dark me-2 search-input"
                  type="search"
                  placeholder='Etsi...'
                  aria-label='Search'></input>

                <button type="submit" className="nav-item">
                  <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" className="nav-icon search-icon"></img>
                </button>

                <div class="dropdown">
                  <button class="dropbtn nav-item acc-btn d-flex justify-items-center align-items-center" disabled>
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="nav-icon" style={{ marginRight: '1rem' }} />

                    <span style={{ color: 'black' }}>
                      {loggedUser ? <h6>Hei, {names.map(customer => <span>{customer.fname}</span>)}</h6> : ''}
                    </span>
                  </button>

                  <ul class="dropdown-menu dropdown-content">
                    <li>
                      {loggedUser == null ? <Link to="/login">
                        Kirjaudu sisään
                      </Link> : ''}
                    </li>
                    <li>
                      {loggedUser ? <Link type="submit" className=' mb-3 mt-2' onClick={logout}>
                        Kirjaudu ulos
                      </Link> : ''}
                    </li>
                    <li>
                      {loggedUser ? <Link to="*" className='mb-3 mt-2'>
                        Tilaukseni
                      </Link> : ''}
                    </li>
                  </ul>
                </div>

                {loggedUser == "admin" ?
                  <button className='nav-item' type="button">
                    <Link to="/manage">
                      <img src='https://cdn-icons-png.flaticon.com/512/2040/2040504.png' className='nav-icon' />
                    </Link>
                  </button> : ''}
              </form>

            </li>


            <>
              <Cart cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} url={url} />
            </>

          </ul>

        </header>
      </div>
    </>
  );
}

/*
<a href="https://www.freepik.com/free-photo/pastel-acrylic-abstract-background-vector_15559399.htm#query=simple%20background&position=43&from_view=keyword">Image by rawpixel.com</a> on Freepik*/