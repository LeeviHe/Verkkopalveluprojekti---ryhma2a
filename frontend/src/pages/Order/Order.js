import React, { useState, useEffect, createRef } from 'react'
import './Order.css';
import '../../components/Shoppingcart/Shoppingcart';
import { v4 as uuid } from 'uuid';

import shoepic from '../../images/products/nike3.png';


export default function Order({ cart, emptyCart, removeFromCart, updateAmount }) {

    const [inputs, _] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {
            inputs[i] = createRef();
        }
    }, [cart.length])

    useEffect(() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart])


    function changeAmount(e, product, index) {
        updateAmount(e.target.value, product);
        setInputIndex(index);
    }

    let sum = 0;

    // POSTITUSKULUT LISÄTTY
    let finalsum = 1.90;

    return (
        <div className='order-container'>
            <div className="order-grid mt-5">

                <div>
                    <h3 className='font' style={{ marginLeft: "2rem" }}>Ostoskori (x tuotetta)</h3>
                    {cart.map((product, index) => {
                        sum += parseFloat(product.price * product.amount);
                        finalsum += parseFloat(product.price * product.amount);
                        return (
                            <>
                                <div className='container'>

                                    <form className="cart-form mb-3" key={uuid()} >

                                        <div className="form-item cart-form-img">
                                            <img src={shoepic}
                                                style={{ width: '100%' }} />
                                        </div>

                                        <div className='form-item rcol'>
                                            brändi
                                        </div>

                                        <div className="form-item lcol">
                                            <input type="number" className="amount"
                                                ref={inputs[index]}
                                                value={product.amount}
                                                onChange={e => changeAmount(e, product, index)} />
                                        </div>

                                        <div className="form-item rcol">{product.productname}
                                        </div>

                                        <a href="#" className="form-item rcol" style={{ fontSize: "small", color: "gray" }} onClick={() => removeFromCart(product)}>
                                            <ion-icon name="trash-outline"></ion-icon>
                                            &nbsp;Poista tuote
                                        </a>

                                        <div className="form-item lcol">
                                            {product.price} €
                                        </div>

                                        <hr style={{ maxWidth: "100%" }} />

                                    </form>
                                </div>
                            </>
                        )
                    })}

                    {/**TYHJENNÄ OSTOSKORI */}

                    <button type="button" className="btn empty-cart-btn d-flex mb-4" onClick={() => emptyCart()}>Tyhjennä ostoskori</button>

                </div>

                <div>
                    <h3 className='font'>Kokonaissumma</h3>
                    <div className='justify-content-left mt-4'>
                        <div className="checkout" key={uuid()}>

                            <div className='mb-3'>Välisumma</div>
                            <div className='cart-price'>{sum.toLocaleString(navigator.language, { minimumFractionDigits: 2 })} €</div>
                            <div className='mb-3'>Toimituskulut</div>
                            <div className='cart-price'>1,90 €</div>
                            <div className='mb-3'>Kokonaissumma</div>
                            <div className='cart-price'>{finalsum.toLocaleString(navigator.language, { minimumFractionDigits: 2 })} €</div>

                        </div>
                        <button type="button" className="checkout-btn btn btn-primary mt-4" onClick={() => emptyCart()}>Kassalle</button>
                    </div>
                </div>

            </div>

            <div className='info-text'>
                <p><ion-icon name="information-circle-outline"></ion-icon>&nbsp;<strong>Hinnoittelu:</strong> Viittaa tuotteen ensimmäiseen listaushintaan.</p>
                <p><ion-icon name="information-circle-outline"></ion-icon>&nbsp;Huom! Ostoskorissasi olevia tuotteita ei ole vielä varattu. Klikkaa "Kassalle" vahvistaaksesi tilauksesi.</p>
            </div>
        </div>
    )
}
