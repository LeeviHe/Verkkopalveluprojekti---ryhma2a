import React, { useState, useEffect, createRef } from 'react'
import './Order.css';
import { v4 as uuid } from 'uuid';

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
    return (
        <div className="ordercont">
            <div className="container mb-3">
                <h3 className="d-flex  py-3">Tuotteet</h3>
                <div className="container cart-container">
                    {cart.map((product, index) => {
                        sum += parseFloat(product.price * product.amount);
                        return (
                            <form className="form" key={uuid()} >
                                <div className="formitem">tuotekuva</div>
                                    <div className="formitem">{product.productname}</div>
                                    <div className="formitem">Määrä 
                                    <input type="number" className="amount" ref={inputs[index]} value={product.amount} onChange={e => changeAmount(e, product, index)} /></div>
                                    <div className="formitem">{product.price} kpl</div>
                                <a href="#" className="asd" onClick={() => removeFromCart(product)}>Poista tuote</a>
                            </form>
                        )
                    })}
                    <div className="checkout" key={uuid()}>
                        <div>Tuotteet Yhteensä</div>
                        <div>{sum.toFixed(2)} €</div>
                        <button type="button" className="form-btn" onClick={() => emptyCart()}>Tyhjennä ostoskori</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
