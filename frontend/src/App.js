import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { Login} from './pages/Forms/Login';
import Register from './pages/Forms/Register';
import Home from './pages/Home/Home';
import Manage from './pages/Manage/Manage';
import Order from './pages/Order/Order'
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import Product from './pages/Product/Product'
import UConstruction from './pages/Underconstruction/UConstruction';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';


const URL = 'http://localhost:3001/backend/';
function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios.post(URL + "credentials/login.php", {}, { withCredentials: true })
      .then(resp => setLoggedUser(resp.data))
      .catch(e => console.log(e.message + " session not found"))//
    axios.get(URL + "credentials/user_info.php", { withCredentials: true })
      .then(resp => setNames(resp.data.names))
      .catch(e => console.log(e.message))
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  const showToastMessage = () => {
    toast.success('Tuote lisätty ostoskoriin', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

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
    showToastMessage()
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
      <Header names={names} loggedUser={loggedUser} setLoggedUser={setLoggedUser} url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} />

      <div className='container'>

        <Routes>
          <Route path="/login" element={<Login url={URL} setLoggedUser={setLoggedUser} />} />
          <Route path="/" element={<Home url={URL} />} />
          <Route path="/manage" element={<Manage url={URL} />} />
          <Route path="/register" element={<Register url={URL} setLoggedUser={setLoggedUser} />} />
          <Route path="/kategoriat/:categoryId" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/kategoriat/:categoryId/:subcategoryId" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/search/:searchPhrase" element={<Products url={URL} />} />
          <Route path="/product/:productId" element={<Product url={URL} addToCart={addToCart} />} />
          <Route path="/order" element={<Order url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} />} />
          <Route path="/Checkout" element={<Checkout url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} />} />
          <Route path="*" element={<UConstruction />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}


export default App;