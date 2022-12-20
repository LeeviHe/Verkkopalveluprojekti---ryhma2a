import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Product.css';
import 'react-toastify/dist/ReactToastify.css';


export default function Products({ url, addToCart }) {
  const [categoryName, setCategoryName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    let address = '';
    if (params.searchPhrase === undefined && params.subcategoryId == null) {
      address = url + '/products/getproducts.php/' + params.categoryId;
    } else if (params.searchPhrase === undefined && params.subcategoryId != null) {
      address = url + 'products/getsubproducts.php/' + params.categoryId + '/' + params.subcategoryId;
    } else {
      address = url + '/products/search.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined && params.subcategoryId == null) {
          setCategoryName(json.category);
          setProducts(json.products);
        } else if (params.searchPhrase === undefined && params.subcategoryId != null) {
          setCategoryName(json.subcategory);
          setProducts(json.subproducts);
        } else {
          setCategoryName(params.searchPhrase);
          setProducts(json);
        }
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
      })
  }, [params])

  return (
    <>
      {/* GRID */}

      <div className="container product-container pt-4">

        {/* SIDEBAR */}

        <div id="main-menu">
          <Sidebar />
        </div>

        <input type="checkbox" id="sidebar-input" />
        <label id="sidebar-menu" for="sidebar-input">

          <div id="sidebar-id" className='d-flex justify-content-center align-items-center'>
            <ion-icon id="sidebar-btn" name="close-outline" />
            <Sidebar />
          </div>

        </label>


        <div className='products-col pt-4'>
          {params.searchPhrase ? <div className='category-name'>Tuotteet haulla {categoryName}</div> : <div className='product-item category-name'>Tuotteet kategoriassa {categoryName}</div>}

          {products.map(product => (

            <div className='item' key={product.product_id}>

              <div className='thumbnail'>
                <Link to={"/tuote/" + product.product_id}><img className='product-img' src={url + 'img/' + product.img} alt="tuotekuva" /></Link>
                <p className='group inner list-group-item-text'>
                  {product.brand}
                </p>
                <h6 className='product-desc'>{product.productname}</h6>
              </div>

              <div className="row">
                <div className="col-">
                  <p className="lead">
                    {product.price} €</p>
                </div>

                <div className="col-">
                  <button className='btn checkout-btn btn-primary mt-4' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}