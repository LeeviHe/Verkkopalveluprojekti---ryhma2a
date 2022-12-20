import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './product.css';

export default function Product({ url, addToCart }) {

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
    }, [params])

    return (
        <>
            <div className="container product-container mt-5 mb-5">

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

                <div className="row helper-row">

                    <div className="col-12 col-md-8 mb-3 d-flex justify-content-center product-col">
                        <div className='img-col d-flex justify-content-center'>
                            <img className='img-fluid product-img' src={url + 'img/' + product?.img} alt="tuotekuva" />
                        </div>
                    </div>

                    <div className="col-6 col-md-4 full-width-col d-flex">
                        <div className='d-flex justify-content-center flex-d-c'>
                            <p className='brand-name'>
                                {product?.brand}
                            </p>

                            <h6 className='brand-desc'>{product?.productname}</h6>

                            <p className="product-price">
                                {product?.price}  €
                            </p>

                            <button className='product-btn btn checkout-btn btn-primary mt-4' type="button" onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
                        </div>
                    </div>

                    <div className="w-100 mt-3 mb-3"></div>

                    <div className="col-6 d-flex align-items-center mt-3 mb-3">
                        <div>
                            <p style={{ margin: '0' }}><ion-icon name="information-circle-outline"></ion-icon>&nbsp;Tuotteen keskimääräinen toimitusaika on 5-7 arkipäivää tilauksen vahvistamisesta.</p>
                        </div>
                    </div>

                    <div className="col-6 d-flex align-items-center mt-3 mb-3">
                        <div>
                            <div className='info d-flex align-items-center'>
                                <ion-icon style={{ color: "green" }} name="checkmark-circle-outline"></ion-icon>
                                Kestävä kehitys
                            </div>
                            <div className='info d-flex align-items-center'>
                                <ion-icon style={{ color: "green" }} name="checkmark-circle-outline"></ion-icon>
                                Ilmainen palautus
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
