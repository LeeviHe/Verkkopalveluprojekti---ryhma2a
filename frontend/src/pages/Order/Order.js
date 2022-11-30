import React, { useState, useEffect, createRef } from 'react'
import Cart from '../../components/Shoppingcart/Shoppingcart';
import '../../components/Shoppingcart/Shoppingcart.css';
import { v4 as uuidv4 } from 'uuid';

export default function Order({ removeFromCart, cart, updateAmount }) {
    let sum = 0;
    const [inputs] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);

    useEffect(() => {
        for (let i = 0; i < cart.length; i++) {
            inputs[i] = React.createRef();
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

    return (
        <div>

            <strong>Items in cart</strong>
            <div className="container cart-container">
                {cart.map((product, index) => {
                    sum += parseFloat(product.price * product.amount);
                    return (
                        <form className="cart-form" key={uuidv4()}>
                            <div className="b c">tuotekuva</div>
                            <div className="a">
                                <div className="b c">{product.productname}</div>
                                <input type="number" ref={inputs[index]} style={{ width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                                <div>{product.price} €</div>

                            </div>
                            <button className="form-btn" type="button" onClick={() => removeFromCart(product)}>tyhjennä ostoskori</button>
                        </form>

                    )
                })}
                <div key={uuidv4()}>
                    <div>{sum.toFixed(2)} €</div>
                </div>
            </div>
        </div>
    )
}
