import Carousel from './components/Carousel/Carousel';
import { CarouselData } from './components/Carousel/CarouselData';
import { useSwipeable } from "react-swipeable";
import axios from 'axios';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Shoppingcart from './components/Shoppingcart';
import Products from './pages/Products';
import Footer from './components/Footer';

const URL = 'http://localhost:3000/backend/'

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:categoryId" element={<Products url={URL}/>} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
        </Routes>
        <Carousel slides={CarouselData} />
      </div>

      <Footer />
    </>
  );
}

export default App;