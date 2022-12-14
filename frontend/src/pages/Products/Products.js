import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Product.css';

export default function Products({ url, addToCart, img }) {
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

      <div className="container product-container pt-4">

        {/* SIDEBAR */}

        <div className='side'>
          <>
            <Sidebar />
          </>
        </div>


        <div className='product-item category-name'>Tuotteet kategoriassa {categoryName}</div>

        <div className='products-col pt-4'>

          {products.map(product => (
            <div className='item' key={product.product_id}>

              <div className='thumbnail'>
                <img className='product-img'  src={url + 'img/' + product.img} alt="tuotekuva" />
                <p className='group inner list-group-item-text'>
                  brand
                </p>
                <h6>{product.productname}</h6> {/* productname -> productbrand tai brand*/}
              </div>

              <div className="row">
                <div className="col-">
                  <p className="lead">
                    {product.price} €</p>
                </div>

                <div className="col-">
                  <button className='btn btn-success' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}