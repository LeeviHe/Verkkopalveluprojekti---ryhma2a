import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
            <ToastContainer />
            <div className="container product-container pt-4">

                {/* SIDEBAR */}

                <div className='side'>
                    <>
                        <Sidebar />
                    </>
                </div>

                <div className='container product-grid mt-5'>
                    <div className='f-g-col'>
                        <div>
                            <img className='product-img' src={url + 'img/' + product?.img} alt="tuotekuva" />
                        </div>
                    </div>

                    <div className='s-g-col'>
                        <p className='brand-name'>
                            {product?.brand}
                        </p>

                        <h6 className='brand-desc'>{product?.productname}</h6>

                        <p className="product-price">
                            {product?.price}  €
                        </p>

                        <button className='btn checkout-btn btn-primary mt-4' type="button" onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
                    </div>

                    <div className='mt-5 mb-5 product-info'>
                        <p><ion-icon name="information-circle-outline"></ion-icon>&nbsp;Tuotteen keskimääräinen toimitusaika on 5-7 arkipäivää tilauksen vahvistamisesta.</p>
                        <p><ion-icon name="information-circle-outline"></ion-icon>&nbsp;Ilmainen toimitus</p>
                    </div>

                    <div className='promises mt-5'>
                        <div>
                            <ion-icon style={{ color: "green" }} name="checkmark-circle-outline"></ion-icon>Kestävä kehitys
                        </div>
                        <div>
                            <ion-icon style={{ color: "green" }} name="checkmark-circle-outline"></ion-icon>
                            Ilmainen palautus
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
