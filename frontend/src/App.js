import './App.css';
import './pages/Home.js';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shoppingcart from './components/Shoppingcart';
import Product from './pages/Product';
import Footer from './components/Footer';
import Carousel from './components/Carousel/Carousel';


function App() {
  return (
    <>
      <Header />

      <div className='container'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
        </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;