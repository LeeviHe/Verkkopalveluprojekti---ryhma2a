import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './product.css';

export default function Product({url, addToCart}) {

    const [product, setProduct] = useState(null);
  
    let params = useParams();
  
    useEffect(() => {
        axios.get(url + 'products/getproduct.php/' + params.productId)
          .then((response) => {
            const json = response.data;
            setProduct(response.data);
          }).catch(error => {
            alert(error.response === undefined ? error : error.response.data.error);
          })
      },  [params])



    return (
        <>
                <ToastContainer/>
            <div className="container product-container pt-4">

                {/* SIDEBAR */}

                <div className='side'>
                    <>
                        <Sidebar />
                    </>
                </div>
                

                <div className='product-item category-name'></div>

                <div className='products-col pt-4'>
    
                    <div className='item'>
                        <div className='thumbnail'>
                            <img className='product-img' src={url + 'img/' + product?.img} alt="tuotekuva"   />
                            <p className='group inner list-group-item-text'>
                            {product?.brand} 
                            </p>
                            <h6>{product?.productname}</h6> {/* productname -> productbrand tai brand*/}
                        </div>

                        <div className="row">
                            <div className="col-">
                                <p className="lead">
                                  {product?.price}  €</p>
                            </div>

                            <div className="col-">
                                <button className='btn checkout-btn btn-primary mt-4' type="button" onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
                            </div>
                        </div>
  
                    </div>
                </div>
            </div>
        </>
    )
}
