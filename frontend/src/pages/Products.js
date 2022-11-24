import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './Product.css';

export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    if (params.subcategoryId != null) {
      axios.get(url + 'products/getsubproducts.php/' + params.categoryId + '/' + params.subcategoryId)
        .then((response) => {
          const json = response.data;
          setCategoryName(json.subcategory);
          setProducts(json.subproducts);
        }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error);
        })
    } else {
      axios.get(url + 'products/getproducts.php/' + params.categoryId)
        .then((response) => {
          const json = response.data;
          setCategoryName(json.category);
          setProducts(json.products);
        }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error);
        })
    }
  }, [params])

  return (
    <>
      {/* GRID */}

      <div className="container grid-container pt-4">

        {/* SIDEBAR */}
        <>
          <Sidebar />
        </>

        <div className='category-name'>Tuotteet kategoriassa {categoryName}</div>

        <div className='products-col'>
          <div id="products" className="col additiona-col pt-4">
            {products.map(product => (
              <div className='item' key={product.productid}>

                <div className='thumbnail'>
                  <h4>{product.productname}</h4>
                  <p className='group inner list-group-item-text'>
                    Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                </div>

                <div className="row">
                  <div className="col-">
                    <p className="lead">
                      {product.price}</p>
                  </div>

                  <div className="col-">
                    <button className='btn btn-success' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}