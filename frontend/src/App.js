import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Order from './pages/Order'
import Products from './pages/Products';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';


const URL = 'http://localhost:3000/backend/'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
   if (cart.some(item => item.productnumber === product.productnumber)){
    const existingProduct = cart.filter(item => item.productnumber === product.productnumber);
    updateAmount(parseInt(existingProduct[0].amount) +1, product);
   }
  else {
    product["amount"] = 1;
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    } 
  }

   function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.productnumber !== product.productnumber);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
   }
   function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.productnumber === product.productnumber));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
   }

  return (
    <>
      <Header url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} />
      
      <div className='container'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kategoriat/:categoryId" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/kategoriat/:categoryId/:subcategoryId" element={<Products url={URL} addToCart={addToCart}/>} />
          <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount}/> } />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;