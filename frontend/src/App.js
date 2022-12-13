import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import {Login, Userpage } from './pages/Forms/Login';
import Register from './pages/Forms/Register';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order'
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';


const URL = 'http://localhost:3000/backend/';
function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    axios.post(URL + "credentials/login.php",{}, { withCredentials: true })
      .then(resp => setLoggedUser(resp.data))
      .catch(e => console.log(e.message))//
  }, [])

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    if (cart.some(item => item.product_id === product.product_id)) {
      const existingProduct = cart.filter(item => item.product_id === product.product_id);
      updateAmount(parseInt(existingProduct[0].amount) + 1, product);
    }
    else {
      product["amount"] = 1;
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.product_id !== product.product_id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
  }
  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.product_id === product.product_id));
    const modifiedCart = Object.assign([...cart], { [index]: product });
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }

  function emptyCart() {
    setCart([])
    localStorage.removeItem('cart');
  }



  return (
    <>
      <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser}url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} />

      <div className='container'>

        <Routes>
          <Route path="/" element={<Home />} />
          {loggedUser ?<Route path="/login" element={<Userpage logemail={loggedUser}/>} /> : <Route path="/login" element={<Login setLoggedUser={setLoggedUser}/>} />}
          <Route path="/register" element={<Register setLoggedUser={setLoggedUser}/>} />
          <Route path="/kategoriat/:categoryId" element={<Products  url={URL} addToCart={addToCart} />} />
          <Route path="/kategoriat/:categoryId/:subcategoryId" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} />} />
          <Route path="/Checkout" element= {<Checkout url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}


export default App;