import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import img from '../../images/logos/shoelando_logo.png';
import Cart from '../Shoppingcart/Shoppingcart.js';
import { ToastContainer, toast } from 'react-toastify';


export default function Header({ loggedUser, setLoggedUser, url, cart, emptyCart, removeFromCart, updateAmount }) {

  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState([]);
  const [name, setName] = useState([]);

  const ToastLogOut = () => {
    toast.success('Olet kirjautunut ulos', {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  function logout() {
    axios.get(url + "credentials/logout.php", { withCredentials: true })
      .then(resp => setLoggedUser(null) & navigate('/') & ToastLogOut())
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
      axios.get(url + "credentials/user_info.php", { withCredentials: true })
      .then(resp => setName(resp.data.name))
      .catch(e => console.log(e.message + " No user info"))
  }, [loggedUser])

  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      navigate('/haku/' + search);
    }
  }

  return (
    <>
      <ToastContainer />

      <div className="container-fluid header-container d-flex justify-content-evenly align-items-center">

        <header className="d-flex flex-wrap py-3 helper-header">

          <div className='header-logo'>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
              <img src={img} className="main-logo" alt="Shoelando logo" />
            </Link>
          </div>

          <form className='header-form d-flex justify-content-center align-items-center'>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => executeSearch(e)}
              className="form-control-dark me-2 search-input"
              type="search"
              placeholder='Etsi...'
              aria-label='Search'></input>

            <button type="submit" className="search-btn nav-items">
              <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" className="nav-icon search-icon"></img>
            </button>
          </form>

          <ul className="nav nav-pills d-flex justify-content-center align-items-center">
            <li className="nav-items d-flex align-items-center">

              <div class="dropdown">
                <button class="dropbtn nav-items acc-btn d-flex align-items-center" disabled>
                  <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="nav-icon" style={{ marginRight: '1rem' }} />

                  <span style={{ color: 'black' }}>
                    {loggedUser ? <h6 style={{ margin: '0' }}>Hei, {name.map(customer => <span>{customer.fname}</span>)}</h6> : ''}
                  </span>
                </button>

                <ul class="dropdown-menu dropdown-content">
                  <li>
                    {loggedUser == null ? <Link to="/kirjautuminen">
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


            </li>

            {loggedUser == "admin" ?
              <button className='nav-items' type="button">
                <Link to="/yllapito">
                  <img src='https://cdn-icons-png.flaticon.com/512/2040/2040504.png' className='nav-icon' />
                </Link>
              </button> : ''}

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