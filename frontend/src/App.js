import './App.css';
import './pages/Home.js';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Shoppingcart from './components/Shoppingcart';
import Product from './pages/Product';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Product />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App; 